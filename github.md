# GitHub SSH Fix Guide

If you encounter a "Password authentication is not supported" error when pushing, it means your repository is using HTTPS instead of SSH.

## 🛠️ The Fix
Switch your remote URL to use SSH by running:

```bash
git remote set-url origin git@github.com:enigmaAditya/REPOSITORY_NAME.git
```

## 📋 How to get the SSH URL:
1. Go to your repository on GitHub.
2. Click the green **Code** button.
3. Select the **SSH** tab.
4. Copy the URL (it starts with `git@github.com...`).

## 💡 Best Practice
Always clone new repositories using the **SSH** link instead of HTTPS to avoid password prompts.
