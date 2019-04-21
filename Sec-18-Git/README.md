# Sec 19: Git and Version Control


## Version Control

To initialize Git:

```
git init
```

Can see all files (including hidden ones with):

```
ls -a
```

can use status command to see if files are inside staging area (uncommitted):

```
git status
```

To add file to staging area:

```
git add fileName.txt
```

Then to commit:

```
git commit -m "complete chapter 1"
```

By convention, git commit messages are in the present tense. 

You can see the commits you've made with the log command:

```
git log
```

If you need to add a bunch of files at once:

```
git add .
```

To see differences between local version and last committed version:

```
git diff chapter3.txt
```

To revert changes made locally:

```
git checkout chapter3.txt
```

## Github and Remote Repositories


```
git remote add origin https://github.com/yourname/repo.git
```

Push your local repository to remote repo, linking them up. "master" is the branch. 

```
git push -u origin master
```

## Gitignore

```
touch .gitignore
```

To remove files from staging area:

```
git rm --cached -r .
```

we store files that should be ignored in the .gitignore file

```
git add . 
```

We can see files listed in the .gitignore file were not added. 

can use * in .gitignore file to ignore all files with a certain extention:

```
*.txt
```

## Branching and Merging

In a scenario where we develop a "main branch" and an "experimental branch", we might eventually want to merge the experimental branch back into the main branch. 

If we want to add a branch called "alien-plot", we could do it like this:

```
git branch alien-plot
```

We can see which branch we are in with:

```
git branch
```

We can switch branches like this:

```
git checkout alien-plot
```

To go back to master branch:

```
git checkout master
```

To merge the alien-plot branch to the master:

```
git merge alien-plot
```

You will be taken to vim and it will ask for a merge message. We can type:

```
:q!
```

Then to push changes to Github. 

```
git push origin master -u
```

## Forking and Pull Requests

For open source projects, forking and pull requests allows multiple collaborators to work on the project without messing things up. 

Person A creates project. Puts it on Github. 

Person B forks project. Then makes changes locally. They push those changes to their forked repo. Then they can make a pull request to Person A's repo (suggested changes that could be merged if Person A agrees). 


## Git Challenge

[Git Challenges](https://learngitbranching.js.org)
