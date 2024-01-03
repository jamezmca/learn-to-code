# GIT & GitHub · Course Notes

#### The ultimate guide to *GIT & GitHub* 🔥

Imagine you're building a castle, but every brick you lay creates a new, separate castle. That's the messy world without Git. Enter Git, your construction manager! It takes snapshots of your castle at key points, like adding a tower or digging a moat. These snapshots are called "commits," and they hold all your changes.

With Git, you can freely experiment: build a turret on one snapshot, a drawbridge on another. Need to go back? No sweat! Just pick a snapshot from the past, and your castle magically reverts. And the best part? Multiple builders can work on the same castle with Git. It merges everyone's changes seamlessly, keeping everyone in sync and avoiding brick-laying conflicts!

So, Git isn't just a rewind button, it's a collaborative construction zone for your code. It remembers every step, lets you explore, and keeps everyone on the same page. Give it a try, and watch your coding creations soar to new heights!

As for GitHub, that's the online hub where all this data is stored and on display!

> *The goal is to become familiar with the material and understand it, not to memorize it. All great developers have reference material they regularly refer to and this resource will always be here should you need it :)*

## Resources

Here are some links you might find helpful!

* **GitHub** -> https://www.github.com
* **GIT Crash Course** -> https://www.youtube.com/watch?v=WqWZt5gi-jw&t=6s
* **Discord Channel** -> https://discord.gg/BYr6gujs4k
* **Learn to code roadmap** -> https://github.com/jamezmca/learn-to-code

## Chapter 1 - Introduction to GIT

GIT is a command line tool. We use it by typing certain commands into our terminal to achieve numerous different outcomes. To become a GIT master, it is important to first understand some of the key commands, but it is equally important to also understand what is known as the *GIT workflow*.

### 1.1 The GIT Workflow

The GIT workflow is best understood by thinking of a large & ancient tree. It has a thick trunk at the center which we can consider to be the **main** or **master** branch, and then it has countless appending branches diverging outwards from the trees trunk at every height.

The GIT workflow has a main/master branch, and also has a number of branches diverging from the master branch at any point of time, where the master branch is the base GitHub repository (the production code in a lot of instances), and the branches might be for new feature development that becomes a modified version of the master branch. 

> *A GitHub **repository** (or "repo") is like a digital storage box for code, keeping track of all versions and letting others collaborate.*

Finally, when our branch is tried, tested & trustworthy, we can then *merge* it back in with the master branch, updating the master branch (and production code) to include the new changes we have been working on; completing the GIT workflow.

> *You can create sub-branches off of other branches, not just the master branch.*

#### 1.1.1 Why Do We Do This?

Imagine if everyone was working on the same code base at the same time. You would constantly have people working on conflicting sections of the code that you would then have to go and resolve with one another. Using a GIT workflow allows us to work off of a snapshot of the master code that no one else can meddle with and we can peacefully work in our own branch until it is complete. Then when it gets merged, everyone gets the same new updated code snapshot to build upon.

We can however still get a form of these work conflicts even whilst using GIT. These are known as *merge conflicts*, and they can be very easily resolved using the VSCode editor.

### 1.1.2 Installing GIT

To see if you already have GIT installed, open up your terminal application.

* If you're on a Mac, look for a command prompt application called "Terminal".
* If you're on a Windows machine, open the windows command prompt or "Git Bash".

Once you've opened your terminal application, type ```git version```. The output will either tell you which version of GIT is installed, or it will alert you that GIT is an unknown command. If it's an unknown command, read further and find out how to install GIT.

* **[Mac Installation](https://sourceforge.net/projects/git-osx-installer/files/git-2.23.0-intel-universal-mavericks.dmg/download?use_mirror=autoselect)** 
* **[Windows Installation](https://gitforwindows.org/)** 

To confirm the process was success, repeat the check described above :P

### 1.1.3 Authenticating with GitHub from GIT

To connect your github account with GIT, you have 2 options; the hardcore mode and the easy mode. The hardcore mode relies on you using the GIT commands we will learn shortly in your terminal, and the easy mode involves the use of a GIT GUI (graphical user interface). You can download the GIT GUI [here ->](https://desktop.github.com/).

Otherwise, we'll be authenticating with GitHub using GIT in our terminal using HTTPS.

To do that we can follow this process:

1. Install the GitHub CLI (command line interface) [here ->](https://github.com/cli/cli#installation).
2. In the command line, enter ```gh auth login```, then follow the prompts.
    - When prompted for your preferred protocol for Git operations, select ```HTTPS```.
    - When asked if you would like to authenticate to Git with your GitHub credentials, enter ```Y```.

Now you're ready to start committing some code 🔥

### 1.3 The GIT Process

So now we understand the process, let's learn exactly how to do it.

> *Note that this guide will cover the 20% of GIT commands that will do 80% of the leg work.*

1. The very first step is to hop into a working directory of your choosing.
    - I typically have all my projects inside of a folder called ```github```.
    - We do this in the terminal using the ```cd``` command which stands for *change directory*.
2. Once in our cwd (current working directory), we must initialize our code base. There's two ways we can do this!
    - Initialize (*init*) a codebase from scratch.
        - **```git init```** will initialize a *new* git repo (must be used at the root level of your project directory).
    - *Clone* a pre-existing codebase onto our hard disk to then contribute to.
        - **```git clone <repo>```** will download a github repo to your local device inside of your current working directory.
        - The ```<repo>``` placeholder can be specified either via SSH or via an HTTPS (preferred) link. Both of these links can be found within the github/gitlab webpage for that repository.

3. We can now **```cd```** into the newly added directory/folder on our device, and within there and while still using the terminal, we can type the **```git status```** command.
    - This will give us an overview of the project and also ensure that we have correctly downloaded or initialized the project on our device.
    - We should also see a statement like **On branch ______** (it will probably say *main*).
        - This lets us know that we are currently in the main/master branch.
        - It is advised against modifying this branch directly, and instead recommended to use a MR system (merge requests).
4. Now, we can double check that the branch on our local device is synchronised with latest code available in the remote GitHub repo (this is basically the source of all truth). We can do this using the **```git pull origin```** command, which will pull the latest version of the code onto our device.
    - It is critical that you do this while *in* the main/master branch unless specifically instructed to do so as we will see later.
5. And now it's time to create a branch to work in. Whilst in the main branch, type **```git checkout -b <name_of_new_branch>```**
    - There name of new branch should be something pertaining to the type of work you're about to do.
        - Typically for features, I'll name them ```f/feature_name```
            - Ensure that the values are not space-separated, and instead use a dash or underscore
        - For hotfixes or bugs, I'll name then ```h/bug_name-patch```
    - The ```-b``` signifies that we are creating a new branch.
        - To swap between existing branches, or the main branch, we simple using the above checkout command **without** using the ```-b``` flag, and instead of a new branch name, we use the name of an existing branch.
        - To view all the currently existing branches, type **```git branch```**.
6. Before starting work, we want to confirm we are in our new work branch by typing the **```git status```** command.
7. Now that we are in our working branch, we can start to add code and new files.
    - After making some progress, we want to use the **```git commit -am "<commit_message_describing_work>"```**. That will save our progress to a commit.
    - After adding one or more new files, we want to use the **```git add .```** command. This will ensure all new files are added to our repository.
8. To save or *push* our changes, or even finished feature or hotfix to the github repo, we use the **```git push --force origin <name_of_branch>```**.
    - Ensure that you have committed all your changes and added all your files prior to doing this. You can guarantee you've saved everything by running the **```git status```** command.
9. Once our code is committed and pushed to the repo, we can then inspect in GitHub. You will be able to see your branch and all the code changes you have made. From here, we want to create a **merge request** (MR) with the code. This will ask you to provide a description of the nature of the work, and also assign people to review and so on. 
    - Once the MR is created, GitHub will then check if the MR code is able to be merged. If so, then you can *merge* the merge request, and the main branch of code will be updated to include your changes. 
    - Be sure to now *checkout* the main branch and once again type **```git pull origin```** to ensure you main branch is updated to include your recently added MR.

#### 1.3.1 Merge Conflicts
    
If your branch is unable to be merged, it's likely that you have a **merge conflict**. To resolve a merge conflict, you need to follow the following instructions:

1. Type **```git status```** to ensure that all the changes and updates made in your branch are committed.
2. Checkout the main branch and run **```git pull origin```**.
3. Checkout your working branch, and type **```git merge master```**.
    - This command will tell you that you have merge conflicts. 
    - VSCode will help you resolve the code conflicts.
4. Once all the merge conflicts are resolved, commit all your changes and add any files that were added.
5. Once again, push your branch to GitHub per step 8 above.
    - If you check the GitHub MR you made, you fixes should be included and the merge conflicts gone, leaving your code to be merged!

## Chapter 2 - Security

Having your code online in a GitHub repository has many great benefits. But it can also be dangerous if you're working with secure keys or code that you wish to keep private and safe. Fortunately, GitHub accomidates for all security preferences, but it's important to know how to configure your projects correctly.

### 2.1 Public vs Private Repos

When you create a GitHub repo, you have the choice to make it public or private. Public repos are considered **open source** as anyone can look at your code, make versions of it, or copy it essentially. This can be great as it allows coders to share their knowledge. 

However, if you have private information in your code or secure keys such as **API Keys** that you want to keep hidden from the world to prevent you ending up with a multi-million dollar bill for a service someone used in your name, then it's possible to make your repo **private**. 

> You can configure the visibility settings via the settings on your repo. 

### 2.2 Environment Variables (.env files)

Another way of protecting special keys or passwords is via the use of a `.env` file. Inside of an environment variables files, we can simply assign our special keys to variable names that we can then use throughout out code base. The means that our code base doesn't have numerous instances of our secret keys plastered throughout it. Instead our keys are only written once inside a secure `.env` file that we can then refer to via their variable names instead.

### 2.2.1 Git Ignore Files (.gitignore)

It's important to note that your `.env` files are not immediately secure. If you upload your `.env` file to a public GitHub repo, then people can still view this file and copy your keys. Instead, we want to keep them soley on our local device; in other words, we **DO NOT** upload our `.env` files to our GitHub repos.

We do this by including the `.env` inside of a file called `.gitignore`. The Git ignore file gets uploaded to GitHub and it will tell Git to not include the `.env` file with your repo. So you can do all your normal Git actions and the `.env` file will remain untouched and safe on your computer.

> Occassionally, secret keys will be included in files where it's just easier to have them in the GitHub repo. In these cases, I will upload them to GitHub & just private the repo so that no one can see it!

## Final Words

I hope that these notes give you the knowledge you need to excel as a GIT maestro! If you've enjoyed the repo, please consider giving it a ***star ⭐️***, and be sure to check out the other guides available so you can become the ultimate developer today :P

Cheers,

James