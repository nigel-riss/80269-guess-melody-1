import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';

const gameSettings = {
  time: 5,
  errorCount: 3,
};

// const onWelcomeScreenClick = () => {
//   // console.log(`Play button clicked`);
//   // alert(`Play button clicked`);
// };

const init = (gameQuestions) => {
  const {
    errorCount,
    time,
  } = gameSettings;

  ReactDOM.render(<App
    time = {time}
    errorCount = {errorCount}
    // onClick = {onWelcomeScreenClick}
    questions = {gameQuestions}
  />, document.querySelector(`.main`));
};

init(questions);
