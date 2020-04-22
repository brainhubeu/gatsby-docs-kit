#!/bin/bash

CONFIG_FILE="gatsby-docs-kit.yml"
DIR_NAME="docs"
DIR_PATH="${DIR_NAME}/example"

# Create docs directory
if [ -d "./${DIR_NAME}" ]; then
  echo '"docs" directory already exists. Can not seed it. Remove it and try again.'
  exit 1;
fi

mkdir -p "./${DIR_PATH}"

# Create gastsby docs kit config file if do not exists
if [ ! -f "./${CONFIG_FILE}" ]; then
  echo "" > $CONFIG_FILE;
fi

# Create example Mk
cp ../tools/seed/my-first-docs.md ./${DIR_PATH}/my-first-docs.md

# Seeding gastsby docs kit config file
echo "- title: DOCS
  dir: ./docs
  url: docs
  sidemenu:
    - title: Example
      dir: example
      items:
        - title: My first docs!
          file: my-first-docs.md" >> $CONFIG_FILE;

# Done
echo "Done!"
