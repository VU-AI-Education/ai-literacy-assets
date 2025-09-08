#!/bin/bash

# GitHub Pages Deployment Script for AI Literacy Quiz
# Run this script to deploy the quiz to GitHub Pages

echo "🚀 Deploying AI Literacy Quiz to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please run 'git init' first."
    exit 1
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Deploy AI Literacy Quiz to GitHub Pages"
fi

# Push to main branch
echo "📤 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo ""
echo "🌐 To enable GitHub Pages:"
echo "   1. Go to your repository on GitHub"
echo "   2. Navigate to Settings > Pages"
echo "   3. Select 'Deploy from a branch'"
echo "   4. Choose 'main' branch and '/ (root)' folder"
echo "   5. Click 'Save'"
echo ""
echo "🎯 Your quiz will be available at:"
echo "   https://yourusername.github.io/repository-name/"
