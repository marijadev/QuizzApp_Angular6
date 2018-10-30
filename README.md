# **__Welcome to QuizzApp__**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

This application is a **quizz** for taking tests and creating ones. 

Currently, there are two types of users: ***administrator and user***. 

**Administrator** is an employee with the higher rank who can create questions and answers, can validate them and has access to the list of all users and their tests.

**User** is an employee who has a possibility to take the test with different difficulty, category or both difficulty and category. 

He answers the questions submitted by the **Administrator**. 

Test consists of three questions added by the **Administrator** and randomly chosen from the database.


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

At this moment, these users are hard-coded in the database and there is no possibility of registering a new one. 

Therefore, if you want to get access to the application, you need to install the *back-end* from the instructions listed bellow and then login with the credentials provided bellow this text.

**login**: contains login form and logic for user sign-in.

**auth.module.ts**: authentication module

**auth.service.ts**: collecting data form login-page form, and handling login requests from back-end.


## **__CORE__**

**HeaderComponent**: containing header template and routing navigation

**ProfileComponent**: containing user's profile template and **edit-profile component**.

**HomeComponent**: simple template placeholder for quizz components.

**core-routing.module.ts**: basic routes for routing components.

**core.module.ts**: core module with component declarations

## **__ADMIN__**

**Questions-directory**: with the **QuestionComponent** responsible for ***dynamic creating of components***. 

This component is designed for submitting a new question

**Pending-directory**: containing template and logic for text-questions that the administrator needs to validate as __Passed__ or __Failed__.

**Users-directory**: has a **UsersComponent** template with the list of all users and their tests. 

Also, this directory contains **SingleUserComponent** with the information about the selected user and his tests. 

All tests can be filtered by:

	1. Difficulty (Easy, Medium, Hard)

	2. Category (JavaScript, Java, PHP) 

	3. Status (Passed, Failed)
	
All the tests are presented with the dates of their submission. 

Currently the length of tests is 4 per page, in order to show ***custom pagination*** written for this component.

As for the **SingleUserComponent**, all tests can be seen displayed with ***CSS Grid***.


There are 5 types of questions:

	1. *Single Choice Question* - based on radio buttons selection

	2. *Multiple Choice Question* - based on checkbox selection

	3. *Text Question* - based on textarea input 

	4. *Order Question* - based on vertical Drag and Drop ordering

	5. *Connecting Question* - based on connection of right side of answers with the left