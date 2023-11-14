---
title: Tutorial 1 - How to Install and Use Jekyll on Ubuntu [A Step by Step Tutorial]
author: eaint
date: 2023-09-08 05:23:00 +0800
categories: [Tutorial , Tutorial_Series]
tags: [Jekyll, Ubuntu, GitHub]
pin: true 
math: true
mermaid: true
image:
  path: "/assets/img/postimg/tuto1.png"
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: Responsive rendering of Chirpy theme on multiple devices.
---

Jekyll is a powerful static site generator that allows you to create websites quickly and easily. In this tutorial, we will show you how to install Jekyll on Ubuntu and set up a basic website.

## Prerequisites

Before we begin, you will need the following:

- Ubuntu 18.04 or later
- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

## Linux Terminal ( WSL2 Ubuntu is fine as well)

 Open up a terminal and  run the following command to update ubuntu (optional)

```bash
sudo apt-get update && sudo apt-get upgrade 
```

## Step 1: Install Dependencies

Before we can install Jekyll, we need to install some dependencies first. and run the following command:

```bash
sudo apt-get install curl gnupg build-essential zlib1g-dev libreadline-dev
```

This will install necessary packages.

Notes: You can install ruby and prerequisities directly as well but I prefer to do things step by steps in order so that I can check easily if something goes wrong. :D
If you want to do that way go to tutorial > Jekyll & Ruby Installation Docs - https://jekyllrb.com/docs/installation/ubuntu/

## Step 2: Install RVM (Ruby Version Manager)

Install RVM using othe following commands:

```bash
sudo apt-add-repository <https://rvm.io/ubuntu>
```

Restart your terminal and check that RVM is installed using the following command:

```bash
rvm -v 
```

## Step 3: Install Ruby 

Install Ruby and other prerequisites using the following command:

```bash
rvm install ruby 
```

## Step 4: Installing other prerequisites 

```bash
sudo apt-get install build-essential zlib1g-dev openssl libssl-dev
```

## Step 5: Add environment variables to your `~/.bashrc` file

Add environment variables to your `~/.bashrc` file to configure the gem installation path:

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## Step 5: Install Jekyll and Bundler

Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

Congrats! You’re ready to start using Jekyll.

## Step 6: Create a New Jekyll Site

Now that we have installed Jekyll, we can set up a website. First, navigate to the directory where you want to create your website. Then, run the following command:

```bash
jekyll new my-website
```

This will create a new Jekyll website in a directory called `my-website`. Navigate to this directory:

```bash
cd my-website
```

## Step 7: Edit the Gemfile and add jekyll as a dependency

Edit the Gemfile and add jekyll as a dependency:

```bash
gem "jekyll"
```

## Step 8: Install the dependencies

Install the dependencies using the following command:

```bash
bundle install
```

## Step 9: Use `bundle exec` when running Jekyll commands

Use `bundle exec` when running Jekyll commands:

```bash
bundle exec jekyll serve
```

## Step 10: Customize Your Website

Now that we have set up a basic Jekyll website, we can customize it to fit our needs. Jekyll provides a variety of configuration options and templates that allow you to create a unique and professional-looking website.

## Conclusion

In this tutorial, we have shown you how to install Jekyll on Ubuntu, create a website locally. We encourage you to explore Jekyll further and experiment with different themes and plugins.
If you encounter any issues during the installation process, please refer to the Jekyll documentation for further guidance.

 Installation Docs - https://jekyllrb.com/docs