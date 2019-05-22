import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionsScreen = (props) => {
  const {onAnswer, question} = props;
  const {answers, genre} = question;

  return <section className="game__screen">
    <h2 className="game__title">Выберите {genre} треки</h2>
    <form className="game__tracks" onSubmit={(evt) => {
      evt.preventDefault();
      onAnswer();
    }}>
      {answers.map((answer, index) => <div className="track" key={`answer-${index}`}>
        <button className="track__button track__button--play" type="button"></button>
        <div className="track__status">
          <audio></audio>
        </div>
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${index}`} id={`answer-${index}`} />
          <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
        </div>
      </div>)}

      <button className="game__submit button" type="submit">Ответить</button>
    </form>
  </section>;
};

GenreQuestionsScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
      src: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default GenreQuestionsScreen;
