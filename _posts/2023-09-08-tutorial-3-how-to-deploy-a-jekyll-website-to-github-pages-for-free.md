---
title: Tutorial 3 - [How to Deploy a Jekyll Website to GitHub Pages for Free]
author: eaint
date: 2023-09-08 06:33:00 +0800
categories: [ Tutorial , Tutorial_Series]
tags: [Jekyll, Ubuntu, GitHub]
pin: true
math: true
mermaid: true
image:
  path: "/assets/img/postimg/tuto3.png"
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: Responsive rendering of Chirpy theme on multiple devices.
---

If you've created a Jekyll theme on your local Ubuntu machine and want to share it with the world, GitHub Pages is an excellent option. With GitHub Pages, you can easily host your Jekyll website without the need for a server or database. In this article, we'll walk you through the steps to create a GitHub repository, commit your Jekyll theme, and deploy it to GitHub Pages.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- A Jekyll theme created on your local Ubuntu machine
- Git installed on your machine
- A GitHub account
    
    <aside>
    👉 Note: The following instructions assume you have already installed Jekyll on your Ubuntu machine.
    
    </aside>
    

## Step 1: Create a New GitHub Repository

The first step is to create a new GitHub repository for your Jekyll theme. Here's how you can do it:

1. Go to your GitHub account and click on the **+** icon in the top right corner of the page.
2. Select **New Repository** from the dropdown menu.
3. Enter a name for your repository in the **Repository name** field.
4. Choose **Public** or **Private** depending on your preference.
5. Check the **Initialize this repository with a README** checkbox.
6. Click on the **Create repository** button.

## Step 2: Commit Your Jekyll Theme

The next step is to commit your Jekyll theme to the GitHub repository. Here's how you can do it:

1. Open a terminal on your Ubuntu machine.
2. Change to the directory where your Jekyll theme is located:
    
    ```bash
    cd /path/to/your/jekyll/theme
   ```
    
3. Initialize a new Git repository in the directory:
    
    ```bash
    git init
    ```
    
4. Add the changes to the Git staging area:
    
    ```bash
    git add .
   ```
    
5. Commit the changes:
    
    ```bash
    git commit -m "Initial commit"
    ```
    
6. Push the changes to the remote repository:

```bash
git push origin main
```

## Step 3: Deploy Your Jekyll Theme to GitHub Pages

The final step is to deploy your Jekyll theme to GitHub Pages. Here's how you can do it:

1. Go to your GitHub repository and click on the **Settings** tab.
2. Scroll down to the **GitHub Pages** section. Click **Pages**
3. Under Build and deployment, click the source and choose **GitHub Actions(Beta).**
4. Configure **GitHub Pages Jekyll.**
5. You don’t have to write anything. Just click **Commit Changes.**
6. Wait a few seconds while GitHub Pages deploys your Jekyll website.
7. Click **Actions** and you can see the build and deploy process.
8. After success, you can now use your fully functional website hosted on GitHub Pages at no cost.

Note: GitHub Actions will create a `.yml` file in the `.github/workflows` directory of your Jekyll repository automatically. This file should include the necessary steps to build and deploy your website, such as installing dependencies, building the site, and pushing it to GitHub Pages.

## Conclusion

In this article, we've shown you how to deploy a Jekyll theme to GitHub Pages. We started by creating a new GitHub repository, committing your Jekyll theme, and finally deploying it to GitHub Pages. With these simple steps, you can easily share your ideas and itineraries on Jekyll website with the world. If you encounter any issues during the deployment process, please refer to the GitHub documentation for further guidance.