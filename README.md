# Flashcards Challange Codecademy

## About

One of my solved project from the Full-Stack Engineer Path of the [codecademy](codecademy.com/) curriculum.

In this app, user can create flashcards grouped in specific topics.

## What I Learn

Implementation of React-Redux and Redux Tool Kit material.

- configure individual slices modules using `createSlice()`; (`@reduxjs/toolkit`)
- configure a store module wth `configureStore()` and the individual slice modules. (`@reduxjs/toolkit`)
- use `useSelector()` in conjunction with the defined selectors in each individual state slices to access the Store; (`react-redux`)
- create selector's to access the states for manipulation; (`react-redux`)
- with `useDispatch()` dispatch actions to the store to update rendering; (`react-redux`)
- understand the view => middleware => Action (dispatch) => view Redux workflow

## To Run

Run `npm start` in the project root and the app will be available on port 3000.

Click [this link](https://rijalghodi-flashcards.netlify.app) to see the project deployment.

## Route

The app's state is totally normalized, with slices for topics, quizzes, and cards.
Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/`:topicId – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

- Create topics
- Create quizzes
- Visit the page for an individual quiz and flip the cards over
