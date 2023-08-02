# Tech-Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

In this challenge, we used starter code to create routes and models for an ecommererce company. We used our knowledge of sequelize, MySQL and insominia to check errors and ensure routes were working correctly. I learned to use insomnia to create requests to the server and how to properly make models using sequelize structure.

## Overview

The following was adpated from the Module 14 coding bootcamp portal:

User Story:<br>
AS A developer who writes about tech<br>
I WANT a CMS-style blog site<br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions

Acceptance Criteria:<br>
GIVEN a CMS-style blog site<br>
WHEN I visit the site for the first time<br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in<br>
WHEN I click on the homepage option<br>
THEN I am taken to the homepage<br>
WHEN I click on any other links in the navigation<br>
THEN I am prompted to either sign up or sign in<br>
WHEN I choose to sign up<br>
THEN I am prompted to create a username and password<br>
WHEN I click on the sign-up button<br>
THEN my user credentials are saved and I am logged into the site<br>
WHEN I revisit the site at a later time and choose to sign in<br>
THEN I am prompted to enter my username and password<br>
WHEN I am signed in to the site<br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out<br>
WHEN I click on the homepage option in the navigation<br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created<br>
WHEN I click on an existing blog post<br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment<br>
WHEN I enter a comment and click on the submit button while signed in<br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created<br>
WHEN I click on the dashboard option in the navigation<br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post<br>
WHEN I click on the button to add a new blog post<br>
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post<br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post<br>
WHEN I click on one of my existing posts in the dashboard<br>
THEN I am able to delete or update my post and taken back to an updated dashboard<br>
WHEN I click on the logout option in the navigation<br>
THEN I am signed out of the site<br>
WHEN I am idle on the site for more than a set time<br>
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts<br>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To use the Express JS API, you must install packages MySQL2 and Sequelize. In addition, you need to install dotenv to hide sensitve information (such as; database name, MySQL2 username and password). This can be done by running the following command npm install in the terminal, as the package.json is already provided in the starter code.

## Usage
Walkthrough video:

https://watch.screencastify.com/v/T5KyARTkZAvFdx2LcckC

Screenshots:<br>
     ```md
    ![alt text](assets/images/GET%20PRODUCTS%20LIST.png)
    ```<br>
     ```md
    ![alt text](assets/images/GET%20PRODUCTS%20BY%20ID.png)
    ```<br>
     ```md
    ![alt text](assets/images/POST%20NEW%20PRODUCT.png)
    ```<br>
    ```md
    ![alt text](assets/images/PUT%20REQUEST.png)
    ```<br>
    ```md
    ![alt text](assets/images/DELETE.png)
    ```<br>


## Credits
To better understand Sequelize modeling and route structures, I watched the following video: https://www.youtube.com/watch?v=Crk_5Xy8GMA

## License

MIT License

Copyright (c) 2023 WarrenAdam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.