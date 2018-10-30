# Welcome to QuizzApp
This application is a **quizz** for taking tests and creating ones. Currently, there are two types of users: administrator and user.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## RUN
In your terminal, run `npm install` to install all dependencies. After installing, run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##LOGIN
**auth** folder:
*login* folder: contains login form and logic for user sign-in.
*auth.module.ts*: authentication module
*auth.service.ts*: collecting data form login-page form, and handling login requests from back-end.

##CORE
**header component**: containing header template and routing navigation
**Profile component**: containing user's profile template and **edit-profile component**.
**home component**: simple template for routing quizz components.

### ADMINISTRATOR
To log in as an administrator, when LOGIN page is loaded, type:
Username: marko@gmail.com
Password: user123

Administrator can see and update his profile, add a new question to the test, validate text questions and has access to all users and their tests.

