# Contributing

Follow the instructions below on how to fork the repo and begin making pull requests to contribute code.

## Forking

To begin contributing to this repo, first create a fork by clicking the button at the top that looks like:

![Fork button](https://i.imgur.com/PHBsLCq.png)

When this is complete, you should now be at your own fork of the original repo. You will always know if you're at the fork or the original by looking at the header:

![Forked repo](https://i.imgur.com/wDJTRkh.png)

### Cloning the Fork

Once the fork is created, clone it by copying the url shown in the "Clone or download" button near the top. Every fork will have it's own url.

![Clone button](https://i.imgur.com/ikSw4le.png)

With the url copied, open the terminal and enter the following, without brackets:

```sh
git clone [copied url]
```

> For a list of basic git commands, check out [Atlassian's guide](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html).

There will now be a folder containing the project in whatever directory you ran the command. Before you begin editing any files, read below on how branches are created and organized.

## Branches

Using a variant of the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), all features will be in individual branches that are merged into the `develop` branch. The `master` is not to be pushed or merged with any other branch but `develop`.

![Gitflow workflow](https://i.imgur.com/q7lbUV7.png)
> Image from [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### Creating Branch

Navigate your terminal inside of the cloned repo folder. Using [Waffle's recommended workflow](https://help.waffle.io/automatic-work-tracking/auto-work-tracking-basics/recommended-workflow-using-pull-requests-automatic-work-tracking), progress is tracked using issue numbers in the branch name. For consistency, all branch names should look like `feature/#[issue number]-[feature-name]`, without brackets.

For example, `feature/#11-readme-update`.

If unsure on what number to assign the feature, check out the [Waffle team board](https://waffle.io/chingu-voyage4/Geckos-Team-6) and each task/issue has a number labeling them.

![Waffle issue card](https://i.imgur.com/CgQMh6m.png)

Once you have figured out a short name for the feature and the number to assign it, create the branch to work in by running the following and replacing the bracket content:

```sh
git checkout -b "feature/#[number]-[name]"
```

For example, 
```sh
git checkout -b "feature/#11-readme-update"
```

### Adding Remote & Keeping Branch Up to Date

Over the course of time, the feature branch created may become out of date with changes across the project and may create merge conflicts later on. To prevent this, the original repo will be added as a remote and be fetched regularly.

To add the original repo as remote, run this command inside the cloned directory:

```sh
git remote add upstream https://github.com/chingu-voyage4/Geckos-Team-6.git
```

To fetch the updates of our new `upstream`, enter:

```sh
git fetch upstream
```

Now the new changes of the `develop` branch can be pulled by running:

```sh
git pull upstream develop
```

### Working in the Branch

Once the branch is created you are now free to edit  code as you normally would in any editor. You may now treat the folder and its contents as your own and be confident in any changes you make.

It is recommended to check if the branch is up to date with `develop` regularly, or as you see big updates merged on the original repo.

## Pull Requests

