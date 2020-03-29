# Unit 19 React Homework: Employee Directory

{
"name": {
"title": "Ms",
"first": "Jennie",
"last": "Stanley"
},
"email": "jennie.stanley@example.com",
"dob": {
"date": "1959-08-15T08:24:04.418Z",
"age": 61
},
"phone": "(036)-488-7351",
"id": {
"name": "SSN",
"value": "256-01-7359"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/91.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
}
}

## Still to do

* Style page to have a how to, a search bar, and search functionality
  * Going through forms from last Saturdays class
  * Sort by one catagory
  * Filter by one catagory

* Make the employees pulled static rather than updating with every refresh?

* Color theme for reference with where I want to put it
  #1C2743 Dark Blue : App.js bkg, Search and Employees font
  #213862 Med Blue : Directory font
  #B46382 Mauve : Employees bkg
  #FD9564 Peach : Search bkg
  #E3463F Tangerine : Employee Card bkg

* Style each employee's cards
  * Ended up remembering that there's such a thing as TABLES god
  * Still want to style them more pretty
  * Add DOB!

* Pick out a font: 
  * for Hs https://fonts.google.com/specimen/Timmana
  * for normal https://fonts.google.com/specimen/Assistant

* God how do you uninstall all the things you don't end up using? 
  * npm install mdbreact trying new table


## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

Each employee should have:
  * Profile Image

  * Name
  
  * Phone 
  
  * Email 
  
  * Date of Birth

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Below is built into the ReadMe

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
