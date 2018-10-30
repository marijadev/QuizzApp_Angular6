# **__Welcome to QuizzApp__**

This application is a **quizz** for taking tests and creating ones. Currently, there are two types of users: administrator and user.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.


## **__RUN__**

In your terminal, run `npm install` to install all dependencies. After installing, run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## **__LOGIN__**

**auth directory**:

*login*: contains login form and logic for user sign-in.

*auth.module.ts*: authentication module

*auth.service.ts*: collecting data form login-page form, and handling login requests from back-end.



## **__CORE__**

**HeaderComponent**: containing header template and routing navigation

**ProfileComponent**: containing user's profile template and **edit-profile component**.

**HomeComponent**: simple template placeholder for quizz components.

**core-routing.module.ts**: basic routes for routing components.

**core.module.ts**: core module with component declarations



### **__ADMINISTRATOR__**


To log in as an administrator, when LOGIN page is loaded, type:

Username: marko@gmail.com

Password: user123

Administrator can see and update his profile, add a new question to the test, validate text questions and has access to all users and their tests.

