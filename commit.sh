#!/bin/bash

# Prompt the user for a commit message
read -p "Enter your commit message: " commitMessage

# Stage all changes
git add .

# Commit the changes with the provided message
git commit -m "$commitMessage"

# Inform the user of the successful commit
echo "Changes have been successfully committed with the message: '$commitMessage'"
