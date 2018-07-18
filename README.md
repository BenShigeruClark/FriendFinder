# FriendFinder

Coding Bootcamp Homework Assignment #13

In this homework assignment we will use Node and Express servers to built a compatibility-based "FriendFinder" application.
This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The server.js file should require the basic npm packages we've used in class: express, body-parser and path.

The htmlRoutes.js file should include two routes

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.

The  apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

My app should then be deployed to Heroku for hosting!

