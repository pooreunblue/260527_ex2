#!/bin/bash

# Git Commit Convention Helper Script
# This script helps with making frequent small commits with the format "(영어 카테고리):(한글 메시지)" and pushing them

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "Error: git is not installed or not in PATH"
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree &> /dev/null; then
    echo "Error: Not in a git repository"
    exit 1
fi

# Function to show usage
show_usage() {
    echo "Usage: $0 [-a] [-m \"category:message\"] [-p]"
    echo "  -a          Add all changes (equivalent to git add .)"
    echo "  -m msg      Commit message in format 'category:korean_message'"
    echo "  -p          Push after commit"
    echo "  -h          Show this help message"
    echo ""
    echo "Example: $0 -a -m \"feat:로그인 기능 추가\" -p"
}

# Parse command line arguments
ADD_ALL=false
COMMIT_MSG=""
PUSH_AFTER=false

while getopts ":am:ph" opt; do
    case $opt in
        a)
            ADD_ALL=true
            ;;
        m)
            COMMIT_MSG="$OPTARG"
            ;;
        p)
            PUSH_AFTER=true
            ;;
        h)
            show_usage
            exit 0
            ;;
        \?)
            echo "Error: Invalid option -$OPTARG" >&2
            show_usage
            exit 1
            ;;
        :)
            echo "Error: Option -$OPTARG requires an argument." >&2
            show_usage
            exit 1
            ;;
    esac
done

# Validate inputs
if [ -z "$COMMIT_MSG" ]; then
    echo "Error: Commit message is required (-m)"
    show_usage
    exit 1
fi

# Validate commit message format (should contain a colon)
if [[ ! "$COMMIT_MSG" =~ : ]]; then
    echo "Error: Commit message must be in format 'category:korean_message'"
    exit 1
fi

# Add changes if requested
if [ "$ADD_ALL" = true ]; then
    echo "Adding all changes..."
    git add .
    if [ $? -ne 0 ]; then
        echo "Error: Failed to add changes"
        exit 1
    fi
fi

# Check if there are staged changes
if ! git diff --staged --quiet; then
    # There are staged changes, proceed with commit
    echo "Committing with message: $COMMIT_MSG"
    git commit -m "$COMMIT_MSG"
    if [ $? -ne 0 ]; then
        echo "Error: Failed to commit changes"
        exit 1
    fi
    
    # Push if requested
    if [ "$PUSH_AFTER" = true ]; then
        echo "Pushing to remote..."
        git push
        if [ $? -ne 0 ]; then
            echo "Error: Failed to push changes"
            exit 1
        fi
        echo "Successfully committed and pushed!"
    else
        echo "Successfully committed! (Use -p flag to push)"
    fi
else
    echo "No changes staged for commit."
    if [ "$ADD_ALL" = false ]; then
        echo "Use -a flag to add all changes, or manually add changes with git add <files>"
    fi
    exit 1
fi