import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionsScreen = (props) => {
  const {onAnswer, question} = props;
  const {answers} = question;

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button"></button>
      <audio></audio>
    </div>

    <form className="game__artist" onChange={onAnswer}>
      {answers.map((answer, index) => <div className="artist" key={`answer-${index}`}>
        <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${index}`} id={`answer-${index}`} />
        <label className="artist__name" htmlFor={`answer-${index}`}>
          <img className="artist__picture" src={`./img/${answer.picture}`} alt={answer.artist} />
          {answer.artist}
        </label>
      </div>)}
    </form>
  </section>;
};

ArtistQuestionsScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
    // src: PropTypes.string.isRequired,
    src: PropTypes.string, // not required yet
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default ArtistQuestionsScreen;
