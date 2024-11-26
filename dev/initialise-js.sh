#!/bin/bash
set -Eeuo pipefail

source "$(dirname "$0")/colours.sh"

printf "%s\n" "${YELLOW}# Checking the folder structure...${NORMAL}"

if [ ! -f "package.json" ]
  then
    printf "%s\n" "${RED}Error: Please run this script from the project root." 1>&2
    printf "Usage: dev\initialise-js.sh <subdirectory>\n" 1>&2
    printf "%s\n" "Example: dev\initialise-js.sh 1_merge-strings-alternately${NORMAL}" 1>&2
    exit 1
fi

if [ $# -eq 0 ]
  then
    printf "%s\n" "${RED}Error: A subdirectory of a LeetCode problem should be provided." 1>&2
    printf "Usage: dev\initialise-js.sh <subdirectory>\n" 1>&2
    printf "%s\n" "Example: dev\initialise-js.sh 1_merge-strings-alternately${NORMAL}" 1>&2
    exit 1
fi

DIRECTORY_PROBLEM="./src/${1}"
DIRECTORY_PROBLEM_JS="${DIRECTORY_PROBLEM}/js"

if [ -d "${DIRECTORY_PROBLEM_JS}" ]
  then
    printf "%s\n" "${RED}Error: The JavaScript project directory already exists.${NORMAL}" 1>&2
    exit 1
fi

printf "%s\n" "${YELLOW}# Creating the JavaScript project...${NORMAL}"

mkdir -p "$DIRECTORY_PROBLEM_JS"
touch "${DIRECTORY_PROBLEM}/README.md"
touch "${DIRECTORY_PROBLEM_JS}/solution-1.js"
touch "${DIRECTORY_PROBLEM_JS}/solutions.test.js"

printf "%s\n" "${GREEN}# Done!${NORMAL}"
