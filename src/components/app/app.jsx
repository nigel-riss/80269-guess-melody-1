import React from 'react';
import PropTypes from 'prop-types';
import questions from '../../mocks/questions.js';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GenreQuestionsScreen from '../genre-questions-screen/genre-questions-screen.jsx';

const App = (props) => {
  const {
    time,
    errorCount,
    onClick
  } = props;

  // return <WelcomeScreen
  //   time = {time}
  //   errorCount = {errorCount}
  //   onClick = {onClick}
  // />;
  return <GenreQuestionsScreen
    answers = {questions[0].answers}
    gerre = {questions[0].genre}
  />;
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default App;
