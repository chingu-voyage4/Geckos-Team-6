# Contributing

Follow the instructions below on how to fork the repo and begin making pull requests to contribute code.

## Forking

To begin contributing to this repo, first create a fork by clicking the button at the top that looks like:

![Fork button](https://i.imgur.com/PHBsLCq.png)

When this is complete, you should now be at your own fork of the original repo. You will always know if you're at the fork or the original by looking at the header:

![Forked repo](https://i.imgur.com/wDJTRkh.png)

### Cloning to Desktop

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

Navigate your terminal to the 