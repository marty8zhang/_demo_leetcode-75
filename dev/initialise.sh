#!/bin/bash
set -Eeuo pipefail

NORMAL=$(tput sgr0)
GREEN=$(tput setaf 2)
RED=$(tput setaf 1)
YELLOW=$(tput setaf 3)

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

SOLUTION_DIRECTORY="${PROBLEM_DIRECTORY}/js"

mkdir --parents "$SOLUTION_DIRECTORY"
touch "${PROBLEM_DIRECTORY}/README.md"
touch "${SOLUTION_DIRECTORY}/solution-1.js"
touch "${SOLUTION_DIRECTORY}/solution-1.test.js"

printf "%s\n" "${GREEN}# Done!${NORMAL}"
