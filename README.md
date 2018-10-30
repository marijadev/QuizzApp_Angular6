# **__Welcome to QuizzApp__**

This application is a **quizz** for taking tests and creating ones. 

It consists of two parts and has two types of users: ***Administrator and User***. 

**Administrator** is an employee with the higher rank who can create questions (for an **Employee** to answer) and answers, who has the authority to validate them and has access to the list of all users and their tests.

**User** is an employee who has a possibility to take the test.

Test consists of three questions added by the **Administrator**. Every question is randomly selected from the database. 

**User** can choose which type of test he wants to take. Tests can be generated by: 

1. Difficulty (Easy, Medium, Hard)

2. Category (JavaScript, Java, PHP) 

3. Combination of Difficulty / Category


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

**QUESTIONS-DIRECTORY**: with the **QuestionComponent** responsible for ***dynamic creation of particular question-component***.

This component is designed for creating a new question.  **Administrator** can add a question, can select difficulty, category and add answer.

There are *five types* of questions:

1. **Single Choice Question** - **Administrator** adds a question and a list of several wrong answers and one correct answer for the user. He will check the checkbox on the right side to mark the correct answer. If he tries to submit this question with more than one correct answer, the 'submit button' will be disabled until only one answer is checked as the correct one.

![admin-single](https://user-images.githubusercontent.com/36046572/47715426-10a3fb80-dc40-11e8-909c-1426546e9212.gif)

2. **Multiple Choice Question** - **Administrator** adds a question and a list of suggested correct and wrong answers for the user. Multiple answers can be checked as the correct ones.

![admin-multi](https://user-images.githubusercontent.com/36046572/47715432-16014600-dc40-11e8-9c42-51175fb7344a.gif)

3. **Text Question** - **Administrator** can add the question, yet not the answer. Answer will be provided by the user. **Administrator** will also have the possibility to examine and validate the user's answer to this question-type.

![admin-text](https://user-images.githubusercontent.com/36046572/47715438-1863a000-dc40-11e8-9863-11935cb30b25.gif)

4. **Ordering Question** - **Administrator** adds the question and a list of correct answers. In the inputs on the right side he will add the number to mark the importance of that answer. There cannot be multiple answers with the same value.

![admin-order](https://user-images.githubusercontent.com/36046572/47715440-1ac5fa00-dc40-11e8-8946-bbfb03b43b47.gif)

5. **Connecting Question** - **Administrator** adds the question and several answer pairs. All the event answers will be mixed later, and the **User** will have to connect the right odd (left side) with the matching even (the right side) of answer.

![admin-connect](https://user-images.githubusercontent.com/36046572/47715446-1c8fbd80-dc40-11e8-9acf-8cb9dfd7b129.gif)


**PENDING-DIRECTORY**: containing template and logic for text-questions that the **Administrator** needs to validate as __Passed__ or __Failed__.

![pending](https://user-images.githubusercontent.com/36046572/47716865-3f23d580-dc44-11e8-974d-0c7412e585d8.png)


**USERS-DIRECTORY**: has a **UsersComponent** template with the list of all users and their tests. 

All tests can be filtered by:

1. **Difficulty** (Easy, Medium, Hard)

2. **Category** (JavaScript, Java, PHP) 

3. **Status** (Passed, Failed)
	
All the tests are presented with the dates of their submission. There are also statistics for all tests, percentage of passed tests from the selected area, as well as the average points.

Currently the length of tests is 4 per page, in order to show ***custom pagination*** written for this component.

![users](https://user-images.githubusercontent.com/36046572/47717372-dfc6c500-dc45-11e8-9dce-d1f78e5c8d23.gif)

Also, this directory contains **SingleUserComponent** with the information about the selected user and his tests. 

As for the **SingleUserComponent**, all tests are displayed with ***CSS Grid***. Also, all tests can be filtered as mentioned above.

![single-user](https://user-images.githubusercontent.com/36046572/47717214-7050d580-dc45-11e8-94a2-15844b3ac437.gif)


## **__USER__**

**User** can take the test. He can choose the test by *Difficulty*, *Category* or both *Difficulty / Category*. 

**TESTS**

**tests.module.ts**: contains declaration of components in this module.

**TestsComponent**: template used as a placeholder for test-question components.

**TestTypeComponent**: template and logic for generating tests and sending requests to back-end. Also, this component has validation for the checkbox fields. Only one type can be selected or the test won't be generated. If the user wants to select both *Difficulty / Category*, he can do so by checking only one item from each list.

![user-generate-test](https://user-images.githubusercontent.com/36046572/47717705-ce31ed00-dc46-11e8-8e28-b54575ae37c0.gif)

After the selection, test is generated and user can begin his examination.

There are 5 types of questions:

1. **Single Choice Question** - based on radio buttons selection

2. **Multiple Choice Question** - based on checkbox selection

3. **Text Question** - based on textarea input 

4. **Order Question** - based on vertical Drag and Drop ordering

5. **Connecting Question** - based on connection of right side of answers with the left