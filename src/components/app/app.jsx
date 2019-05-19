import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import questions from '../../mocks/questions.js';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
// import GenreQuestionsScreen from '../genre-questions-screen/genre-questions-screen.jsx';


class App extends Component {
  render() {
    const {
      time,
      errorCount,
      // questions,
    } = this.props;

    return <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <WelcomeScreen
        time = {time}
        errorCount = {errorCount}
        onClick = {() => {
          // question++;
        }}
      />;
    </section>;
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  // onClick: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
