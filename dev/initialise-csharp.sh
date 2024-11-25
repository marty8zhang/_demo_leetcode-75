#!/bin/bash
set -Eeuo pipefail

source "$(dirname "$0")/colours.sh"

printf "%s\n" "${YELLOW}# Checking the folder structure...${NORMAL}"

if [ ! -f "package.json" ]
  then
    printf "%s\n" "${RED}Error: Please run this script from the project root." 1>&2
    printf "Usage: dev\initialise-csharp.sh <subdirectory>\n" 1>&2
    printf "%s\n" "Example: dev\initialise-csharp.sh 1_merge-strings-alternately${NORMAL}" 1>&2
    exit 1
fi

if [ $# -eq 0 ]
  then
    printf "%s\n" "${RED}Error: A subdirectory of a LeetCode problem should be provided." 1>&2
    printf "Usage: dev\initialise-csharp.sh <subdirectory>\n" 1>&2
    printf "%s\n" "Example: dev\initialise-csharp.sh 1_merge-strings-alternately${NORMAL}" 1>&2
    exit 1
fi

DIRECTORY_PROBLEM="./src/${1}"
DIRECTORY_PROBLEM_CS="${DIRECTORY_PROBLEM}/csharp"
DIRECTORY_SOLUTION_CS="${DIRECTORY_PROBLEM_CS}/Program"
DIRECTORY_SOLUTION_CS_TESTS="${DIRECTORY_SOLUTION_CS}.Tests"

if [ -d "${DIRECTORY_PROBLEM_CS}" ]
  then
    printf "%s\n" "${RED}Error: The C# projects directory already exists.${NORMAL}" 1>&2
    exit 1
fi

printf "%s\n" "${YELLOW}# Creating the C# projects...${NORMAL}"

mkdir -p "$DIRECTORY_PROBLEM_CS"
dotnet new console -o "$DIRECTORY_SOLUTION_CS"
dotnet new xunit -o "$DIRECTORY_SOLUTION_CS_TESTS"
dotnet add "$DIRECTORY_SOLUTION_CS_TESTS" reference "$DIRECTORY_SOLUTION_CS"

printf "%s\n" "${YELLOW}# Adding C# unit testing dependencies...${NORMAL}"

cd "$DIRECTORY_SOLUTION_CS_TESTS"
dotnet add package FluentAssertions
cd -

printf "%s\n" "${YELLOW}# Adding the newly created C# projects to the .NET solution...${NORMAL}"

dotnet sln add "$DIRECTORY_SOLUTION_CS" "$DIRECTORY_SOLUTION_CS_TESTS"

printf "%s\n" "${GREEN}# Done!${NORMAL}"
printf "%s\n" "${MAGENTA}# Re-opening the solution (``LeetCode75.sln``) from the IDE might be needed.${NORMAL}"
