# **__Welcome to QuizzApp__**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

This application is a **quizz** for taking tests and creating ones. 

Currently, there are two types of users: *administrator and user*. 

At this moment, these users are hard-coded in the database and there is no possibility of registering a new one. 

Therefore, if you want to get access to the application, you need to install the *back-end* from the instructions listed bellow and then login with the credentials provided bellow this text.

## **__Run__**

In your terminal, run `npm install` to install all dependencies. After installing, run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### **__Administrator__**

To log in as an administrator, when LOGIN page is loaded, type:

*Username*: marko@gmail.com

*Password*: user123

Administrator can see and update his profile, add a new question to the test, validate text questions and has access to all users and their tests.

### **__User__**

*Username*: petar@gmail.com

*Password*: user123

User can select type and/or difficulty of tests he wants to take. 
After the test submit, he can see the list of all passed/failed tests, and validated questions.


# **__Application Structure__**

## **__AUTH__**

**login**: contains login form and logic for user sign-in.

**auth.module.ts**: authentication module

**auth.service.ts**: collecting data form login-page form, and handling login requests from back-end.


## **__CORE__**

***HeaderComponent***: containing header template and routing navigation

***ProfileComponent***: containing user's profile template and **edit-profile component**.

***HomeComponent***: simple template placeholder for quizz components.

***core-routing.module.ts***: basic routes for routing components.

***core.module.ts***: core module with component declarations

## **__ADMIN__**

***Pending-directory***: containing template and logic for text-questions that the administrator needs to validate as __Passed__ or __Failed__.

***Users-directory***: has a **UsersComponent** template with the list of all users and their tests. 

Tests can be filtered by:

	1. __difficulty (Easy, Medium, Hard)__

	2. __category (JavaScript, Java, PHP)__ 

	3. __status (Passed, Failed)__
	
All the tests are presented with the dates of their submission. 

Currently the length of tests is 4 per page, in order to show ***custom pagination*** written for this component.
