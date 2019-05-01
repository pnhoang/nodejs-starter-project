# Introduction

The purpose of this document is to define a common coding guideline.

## Introducing Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter, it supports many languages, it integrates with most editors and it leaves us just a few options to choose which is good.

It can reformat the whole file, or the whole repository using a command, or integrates directly into the editor to reformat on save, or with git hooks, we can also run scripts to reformat all the committed files.

Example PRs with all the code reformatted with Prettier:

-   https://github.com/adviqo-GmbH/AdvisorTool/pull/320
-   https://github.com/adviqo-GmbH/AdvisorTool/pull/321

## ESLint

[ESLint](https://eslint.org/) helps us to identify potential errors in the code after we write them, errors that Prettier can not identify, for example, assigning values to a variable that comes from a parameter in a function, and many more.

## Airbnb Javascript Style Guide

[Airbnb](https://github.com/airbnb/javascript) provides an intensive collections of style guides for Javascript that we should inherit.

## Yarn

Most of the team already agrees on using [Yarn](https://yarnpkg.com/en/) as the dependencies management tool, so let's also use Yarn for any new React repository created.

## VSCode integration

Enable Prettier to format on save in [VSCode](https://github.com/prettier/prettier-vscode), it can cause less headache to think about how you write your code, should it be a single quote or a double quote, should it contain a bracket or not in an arrow function. those questions we don't have to think about with a Code formatter like Prettier.
