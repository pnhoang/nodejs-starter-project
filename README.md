# Introduction

Node.js starter application, includes all necessary setup to quickly start your Node.js project

## Introducing Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter, it supports many languages, it integrates with most editors and it leaves us just a few options to choose which is good.

It can reformat the whole file, or the whole repository using a command, or integrates directly into the editor to reformat on save, or with git hooks, we can also run scripts to reformat all the committed files.

## ESLint

[ESLint](https://eslint.org/) helps us to identify potential errors in the code after we write them, errors that Prettier can not identify, for example, assigning values to a variable that comes from a parameter in a function, and many more.

## Airbnb Javascript Style Guide

[Airbnb](https://github.com/airbnb/javascript) provides an intensive collections of style guides for Javascript that we should inherit.

## Yarn

We use [Yarn](https://yarnpkg.com/en/) as the dependencies management tool.

## VSCode integration

Enable Prettier to format on save in [VSCode](https://github.com/prettier/prettier-vscode), it can cause less headache to think about how you write your code, should it be a single quote or a double quote, should it contain a bracket or not in an arrow function. those questions we don't have to think about with a Code formatter like Prettier.

## Git Hooks

Git hooks can be used to run scripts on committing or pushing to a remote repository.
[Husky](https://github.com/typicode/husky) can help us setup different types of hooks.

We would like to reformat all files of a commit before actually committing. Normally the script will not have to do anything if we already have format on Save in our editor. This is just an extra step to ensure that our remote repository has the same code formatting for everyone that happens to not use the function Format on Save of the editor.
