#!/bin/bash
set -Eeuo pipefail

NORMAL=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
MAGENTA=$(tput setaf 5)

printf "%s\n" "${YELLOW}# Checking the folder structure...${NORMAL}"

if [ ! -f "package.json" ]
  then
    printf "%s\n" "${RED}Error: Please run this script from the project root." 1>&2
    printf "Usage: dev\initialise <subdirectory>\n" 1>&2
    printf "%s\n" "Example: dev\initialise 1_merge-strings-alternately${NORMAL}" 1>&2
    exit 1
fi

if [ $# -eq 0 ]
  then
    printf "%s\n" "${RED}Error: A subdirectory of a LeetCode problem should be provided." 1>&2
    printf "Usage: dev\initialise <subdirectory>\n" 1>&2
    printf "%s\n" "Example: dev\initialise 1_merge-strings-alternately${NORMAL}" 1>&2
    exit 1
fi

PROBLEM_DIRECTORY="./src/${1}"

if [ -d "${PROBLEM_DIRECTORY}" ]
  then
    printf "%s\n" "${RED}Error: The problem directory already exists.${NORMAL}" 1>&2
    exit 1
fi

printf "%s\n" "${YELLOW}# Creating the JavaScript project...${NORMAL}"

SOLUTION_DIRECTORY_JS="${PROBLEM_DIRECTORY}/js"

mkdir -p "$SOLUTION_DIRECTORY_JS"
touch "${PROBLEM_DIRECTORY}/README.md"
touch "${SOLUTION_DIRECTORY_JS}/solution-1.js"
touch "${SOLUTION_DIRECTORY_JS}/solution-1.test.js"

printf "%s\n" "${YELLOW}# Creating the C# projects...${NORMAL}"

SOLUTION_DIRECTORY_CS="${PROBLEM_DIRECTORY}/csharp/Program"
SOLUTION_DIRECTORY_CS_TESTS="${SOLUTION_DIRECTORY_CS}.Tests"

dotnet new console -o "$SOLUTION_DIRECTORY_CS"
dotnet new xunit -o "$SOLUTION_DIRECTORY_CS_TESTS"
dotnet add "$SOLUTION_DIRECTORY_CS_TESTS" reference "$SOLUTION_DIRECTORY_CS"

printf "%s\n" "${YELLOW}# Adding C# unit testing dependencies...${NORMAL}"

cd "$SOLUTION_DIRECTORY_CS_TESTS"
dotnet add package FluentAssertions
cd -

printf "%s\n" "${YELLOW}# Adding the newly created C# projects to the .NET solution...${NORMAL}"

dotnet sln add "$SOLUTION_DIRECTORY_CS" "$SOLUTION_DIRECTORY_CS_TESTS"

printf "%s\n" "${GREEN}# Done!${NORMAL}"
printf "%s\n" "${MAGENTA}# Re-opening the solution (``LeetCode75.sln``) from the IDE might be needed.${NORMAL}"
