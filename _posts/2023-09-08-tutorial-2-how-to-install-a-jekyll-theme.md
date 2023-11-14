---
title: Tutorial 2 - How to Setup and Install a Jekyll Theme[A Step by Step Tutorial]
author: eaint
date: 2023-09-08 07:33:00 +0200
categories: [Tutorial ,Tutorial_Series]
tags: [Jekyll, Ubuntu, GitHub]
pin: true
math: true
mermaid: true
image:
  path: "/assets/img/postimg/tuto2.png"
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: Responsive rendering of Chirpy theme on multiple devices.
---

Now that we have set up a basic Jekyll website, we can customize it to fit our needs. Jekyll provides a variety of configuration options and templates that allow you to create a unique and professional-looking website.

## Choose a Jekyll Theme

The first step in installing a Jekyll theme is to choose a theme that you like. There are many themes available for Jekyll, and you can find them on the Jekyll Themes website or on GitHub. There will be two methods in this tutorial.

- Method A - Easy way
- Method B - Download and install theme

### Method A

In this example, we choose the Minima Theme   [https://github.com/jekyll/minima](https://github.com/jekyll/minima)

## Step 1: Minima Theme

The first step in installing the Minima theme is to choose it as your theme. Minima is the default theme that comes with Jekyll, so you don't need to download it separately. However, you do need to activate it in your site's configuration file.

## Step 2: Update Your Jekyll Configuration File

To activate the Minima theme, you need to update your Jekyll configuration file. Open the `_config.yml` file in your site's root directory and add the following line:

```yaml
theme: minima

```

## Step 3: Customize Your Theme (Optional)

Now that you have installed the Minima theme, you can customize it to your liking. Minima comes with a `_config.yml` file that allows you to customize the theme's settings. You can also modify the HTML and CSS files to change the look and feel of your website.

## Step 4: Build and Serve Your Site

Once you have installed and customized your Minima theme, you can build and serve your site to see the changes you have made. Open a terminal window and navigate to your site's root directory. Then, run the following command to build your site:

```bash
bundle exec jekyll build

```

After the build process is complete, you can serve your site using the following command:

```bash
bundle exec jekyll serve

```

# Method B

You can find Jekyll themes on the [Jekyll Themes website](https://jekyllthemes.io/) or on [GitHub](https://github.com/topics/jekyll-theme).

## Step 1: Download your favorite theme

Once you have chosen a theme, download it to your computer and move it to the destination folder.

## Step 2: Add the Theme to Your Jekyll Site

To add the downloaded theme to your Jekyll site, navigate to your site's root directory and create a new folder named `_themes`. Move the downloaded theme folder into the `_themes` folder.

## Step 3: Update Your Jekyll Configuration File

Open the `_config.yml` file in your site's root directory and add the following line:

```yaml
theme: theme-name

```

Replace `theme-name` with the name of the theme you downloaded in step 1.

## Step 4: Customize Your Theme

Most themes come with a `_config.yml` file that allows you to customize the theme's settings. You can also modify the HTML and CSS files to change the look and feel of your website.

## Step 5: Build and Serve Your Site

```bash
bundle exec jekyll build

```

After the build process is complete, you can serve your site using the following command:

```bash
bundle exec jekyll serve

```

## Conclusion

In this tutorial, we have shown you how to install a Jekyll theme on your website in just a few simple steps. If you encounter any issues during the installation process, please refer to the Jekyll documentation for further guidance.

**Installation Docs -** [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

**Step by Step Tutorial -** [https://jekyllrb.com/docs/step-by-step/01-setup/](https://jekyllrb.com/docs/step-by-step/01-setup/)