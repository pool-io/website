# poolet.io

This repository contains the Next.js app that will be the main poolet.io website. It will be hosted on a ec2.

## Hosted Domains

The code in this repository is hosted on:

-   [poolet.io](https://www.poolet.io)
-   [poolfol.io](https://www.poolfol.io)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Contributing](#contributing)

## Getting Started

1. `git clone` the repository
    - _Note: to push changes later on, you must clone using `ssh`_
        - Setup ssh by following [this](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
        - Be sure finish **all** of the following steps:
            - Generating a new SSH key
            - Adding your SSH Key to the ssh-agent
                - _Do not forget about step 3_
2. Download `node` & `npm` [here](https://nodejs.org/en/download/)
3. Run `npm install --global yarn` to download yarn
4. Run `yarn install` in the project's root directory to install `node_modules`
5. Run `yarn run dev` to run the server
6. Go to [http://localhost:3000](http://localhost:3000) on your browser

## Prerequisites

For each of the following prerequisites, click on the given link and follow/read the tutorial. They are usually under the _Learn_ tab.

1. [javascript](https://www.javascript.com/)

    - this project is written in javascript (typescript)
    - By no means, do you have to be a js pro, but understand enough to be able to read what's written.
    - If you have prior programming experience, a simply look over the syntax should suffice. If not...
    - Basic questions you should be able to answer:
        1. How are different types (boolean, string, number, arrays) represented in javascript?
        2. How do you define a function and how do you use them?
        3. What are objects and how are they used in javascript?

2. [typescript](https://www.typescriptlang.org/)

    - typescript is javascript with syntax for types
    - ts allows for type declarations on javascript objects which facilitates code management for bigger projects.
    - Once you are familiar with javascript, writing typescript simply becomes annotating your javascript code.
    - Basic questions you should be able to answer:
        1. How do you use typescript to add type declarations to variables?

3. [React](https://reactjs.org/)

    - React is a js library for building user interfaces
    - It allows for interactive websites and many frameworks are built on top of it
    - To learn, complete the [tutorial](https://reactjs.org/tutorial/tutorial.html)

4. [Next.js](https://nextjs.org/)
    - Next.js is a React framework meant for production web applications.
    - It allows for server-side pre-rendering & rendering which can increase load times and SEO.
    - To learn, complete the [tutorial](https://nextjs.org/learn/basics/create-nextjs-app)

## Contributing

Before you contribute to the project, be sure to have at least a basic understanding of the topics listed in the **Prerequisites** section above.

The `master` branch is the main branch with the latest _complete_ features. Any commits to `master` should definitely not break the app and ideally should have all features completely integrated.

The `production` branch is the branch with the deployed code. It has a [Github Action](https://github.com/pool-io/website/actions) set up that deploys the code to an EC2. Any commits to `production` should definitely not break the app and have complete features.

_NOTE: In order to push changes to this repository, you must be connected using **ssh**_

The following steps are for making _quick_ changes to the website. For bigger changes, create a new **branch**.

1. Run `git clone git@github.com:pool-io/website.git`
    - If it does not work, be sure to follow [Getting Started](#getting-started)
2. Make sure you are on the `master` branch
    - Run `git status`, it should have a line saying what branch you are on
    - Run `git checkout master` to ensure you are on the `master` branch
3. Pull the latest commits
    1. Run `git pull`
4. Make changes
    - You are free to change any number of files/lines within the project directory
    - Run `git status` to see what files have been changed
    - Run `git diff` to see the difference in those files
        - Up/Down Arrow Key to move
        - `q` to quit
5. Create a new commit on `master`
    1. Run `git add . `
        - Adds all the files in the current directory (recursively)
        - Run `git status` to see what files are staged
    2. Run `git commit -m "YOUR COMMIT MESSAGE"`
        - Replace `YOUR COMMIT MESSAGE` with your message (need quotes)
6. Push commit to Github
    1. Run `git push`
        - This will push your latest change to Github
        - Your change should now be visible on Github
7. Create a new **Pull Request** from `master` to `production`
    1. On Github, go to the Pull Request tab
    2. Click **Create New Pull Request**
    3. Ensure `production <- master`
8. Merge Pull Request **ONLY IF YOU ARE SURE**
    - The act of merging will initiate a GitHub Action which will deploy the code in the `production`
      branch to the EC2. In about 2 -3 minutes, your changes will be available on our main website.
