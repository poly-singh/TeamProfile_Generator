# TeamProfile_Generator

## Description
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

Walkthrough video of the application:
https://drive.google.com/file/d/1CGjB75fE5ZG0H2pl3T-KryPKd88hmtAF/view 

## Table of contents
- [Description](##Description)
- [User Story](##User Story)
- [Usage](##Usage)
- [Acceptance Criteria](##Acceptance Criteria)
- [Installation](##Installation)
- [Contributors](##Contributors)
- [Testing](##Testing)
- [Contributing][##Contributing]
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

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

## Installation
```md
npm init
npm install inquirer
npm install email-validator
npm install jest
```

## Usage
```md
node index.js
```
## Testing
```md
npm run test
```
## Contributing
Poly Singh

## Snapshots of the application:
![Team_profile](./dist/Team_profile.png)

## Repository Link
https://github.com/poly-singh/TeamProfile_Generator 




