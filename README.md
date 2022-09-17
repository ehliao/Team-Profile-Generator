# Team Profile Generator

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Video Walkthrough](#video-walkthrough)
* [GitHub](#github)

<br/>

# Description
The task of this challenge required us to build a Node.js command-line application to take information about employees and then generate an HTML webpage that displays the information for each person. A part of the requirement is the test the code and for it to pass, which a unit test was written for each part.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

# Installation
To run the application, please install necessary npm modules through the command line by inputing `npm install`. Once modules have been installed, run `npm test` to ensure the unit test files pass. Finally, run `node idex.js` to launch the command-line application to initiate the prompts. 

# Video Walkthrough
[Video Walkthrough](https://drive.google.com/file/d/1EC6p1RykKr6fiKShHWv_o1_dkYy-n5ex/view)

# GitHub
[GitHub Repo](https://github.com/ehliao/Team-Profile-Generator)
<br/>
[My GitHub Username](https://github.com/ehliao)

