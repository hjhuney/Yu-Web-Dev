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


