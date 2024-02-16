---
title: "Deployment"
status: "in-progress"
order: 11
---

# Deployment · Course Notes

#### The ultimate guide to *Deployment* 🔥

## Resources

Here are some links you might find helpful!

* **GitHub** -> https://www.github.com
* **Git & GitHub Notes** -> https://smoljames.com/notes/git_github
* **Discord Channel** -> https://discord.gg/BYr6gujs4k
* [**Learn to Code Roadmap**](https://www.smoljames.com/roadmap)

## Chapter 1 - Overview of Deployment

The term deployment refers to the process of taking your code base, that you have likely been developing on your local device, and officially publishing it to the world wide web, live for everyone to see and experience; at least this is the process for most modern full stack applications.

There's an entire body of knowledge relating to this topic called CI/CD or continuous integration and continuous deployment. It's a software development practice that uses automation to deliver software changes to users in a secure, repeatable, and timely manner. 

In a world of a million and one ways to deploy code to the internet, in this guide we'll look at my favorite 4 options (the foundations / essentials), what they are for & how to do it.

*Deployment solutions can vary for backend code and frontend code, so we'll look at each of them one at a time.*

## Chapter 2 - Deploying via GitHub

As much as we aren't going to dive deep into the realm of CI/CD processes, and are just learning the essentials, a big part of deployment is automating the process so that when you make updates or modifications to your local code and then push the changes to the relevant GitHub repo, that these changes are then reflected in the deployed version of the code also.

Consequently, almost every single code hosting/deployment service will allow you to connect your GitHub account, and deploy the code from a GitHub repo. This is the preferred method of deploying our code, as the services will automatically listen for changes in the GitHub repo, and when you push new commits to your code and merge them with the master branch, your production code will automatically be re-deployed to reflect the latest changes.

**If you want to learn how to get setup with GitHub, check out this [guide](https://smoljames.com/notes/git_github).**

## Chapter 3 - Deploying Frontend Code

First on the list is deploying frontend code, as it's typically the easier of the two processes.

Once your code has been deployed to GitHub, you can follow these steps to have your code live, with a custom URL, on the internet via a site called Netlify.

1. First up, open up Netlify in your browser, and create a new account (this is all totally free).
    - https://www.netlify.com/
2. Once you have created a new account, on the home dashboard, look for a button that says **Add new site**.
3. That will open up a menu, where we now need to click the *Import an existing project* button.
4. After being routed to the deploymnent page, select the button that says *Deploy with GitHub*.
    - That will prompt you to authorize Netlify to integrate with your GitHub account, which you will need to do.
5. From this window, you will be able to see all the GitHub repos you have opted to have available for Netlify to deploy.
    - If you can't see you repo available, scroll down to the bottom and select *Configure the Netlify app on GitHub*.
    - Then, select your associated GitHub account.
    - Scroll down until you see **Repository access**.
    - Hit *Select repositories*, and add the new repo that you wish to deploy.
    - Once the repo is added, hit **save**, and you will be redirected back to Netlify where we can then continue with our deployment.
6. Select the repo that you wish to deploy.
7. Netlify will likely then recognize the key instructions required to deploy your app, scroll down and hit **Deploy ___APP_NAME___**.
    - If you have environment variables in your app, then add them using the *Add environment variables* button just above the deployment button.
8. Your code will now be deployed, and you can track the progress of your deployment, in addition to seeing any error logs that might break your deployment, in which case you would need to go away, resolve them, push the changes to GitHub and your code will be automatically re-deployed!
9. After hitting the deploy button, you will be redirected to a page that tells your the overview statistics of your page, including the current deployment status. On the left hand side you will see a number of tabs, select the tab called **Domain management**.
10. Here you can either add a custom domain that you own, or if you select the *Options* dropdown adjacent to the current active URL (they normally look super random), you will be able to then select *Edit site name*.
11. Give your site it's brand new name / URL!
12. Share you project with the world 🎉

## Chapter 4 - Deploying Backend Code

Backend code is slightly more complicated to deploy, as backend code actually needs to run on a machine, where frontend code can instead be sent as an HTML file to then be loaded on a users computer.

My favorite service for deploying backend code is Render, simply because of how easy it is; it's not perfect but they will get your code up and running for free no questions asked, and they have great GitHub integration so the deployment process is much the same as above.
    - https://render.com/

The only caveat with deploying via Render (when using their free tier), is that you will experience what is known as a **Cold Start**. When you want to send network requests to your code, they'll hit the machine, which needs to be booted up before being able to appropriately respond to the incoming network request. This allows them to save costs as they don't have to currently keep your server up and running, and only have it live during periods of activity. 

*You can do it free, or for $6 or so dollars a month, you can have some allocated cloud machines permanently up and running.*

To get started, first push your code to GitHub, then follow these steps:

1. Sign in to Render (I like to sign in using my GitHub account).
2. Once logged in, in the top right hand corner you will see a button that says **New +** - click said button.
3. That will open up a dropdown with numerous options - to deploy your server code you will need to select the one that says *Web Service*.
4. You will then be redirected to a page that asks where you want to source your code from - select the GitHub option and hit **Next**.
5. Select the repo you wish to deploy, and hit **Connect**.
6. Fill out the form, completing any mandatory and empty fields.
7. Select the **Free Instance Type**.
8. Deploy your code by hitting the **Create web service** button!
9. You will then be able to track the progression of your deployment, and if you go to the *Dashboard*, and then select your new service, you will see a URL available to you that will allow you to access your new web service 🎉

## Chapter 5 - AWS (Coming soon!)

### 5.1 Frontend on AWS

### 5.2 Backend on AWS

## Chapter 6 - NGINX + VM (Coming soon!)

## Chapter 7 - Databases (Coming soon!)

do backup systems and everything

Docker etc

