This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

You must have node installed to run this via "npm start"

Download the repository and run npm install in the highspot directory.

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

## TODO Items

Currently, the entire result set of cards gets wiped and a new axios request is sent after every letter typed. <br />
I'd like to buffer this so we wait until the user is done typing.

I also did not implement any logic for placeholder images while they are loading, <br />
so that is a potential improvement as well.

## Technologies Used

I used a few external packages to achieve the goal of the exercise.

### redux

I am using redux to handle the storing of data to avoid the pain of passing props up and down.

### thunk

I am using thunk as middleware in redux to allow async actions such as the get request called by...

### axios

axios is my preferred package for making ajax calls, this was needed to make the api call to https://api.elderscrollslegends.io/v1/cards.

### node-sass

SASS/SCSS make writing css so much cleaner and easier to maintain, <br />
node-sass enables me to write scss in this react app.

## Scope Decisions

I stuck pretty closely to the requirements in the interest of time. <br />
However, I noticed that the rarity was being returned by the api, and thought it <br />
would be fun to add some styling to each card reflect that. 

I noticed some visual bugs on the cards that have a thicker border, but I was <br />
unable to determine any correlation to the data so I could style around it.
