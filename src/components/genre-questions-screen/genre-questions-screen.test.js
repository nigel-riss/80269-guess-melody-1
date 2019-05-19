import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionsScreen from './genre-questions-screen.jsx';

const mock = {
  genre: `rock`,
  answers: [
    {
      src: ``,
      genre: `rock`,
    },
    {
      src: ``,
      genre: `blues`,
    },
    {
      src: ``,
      genre: `jazz`,
    },
    {
      src: ``,
      genre: `rock`,
    },
  ]
};

it(`GenreQuestionsScreen is rendered correctly`, () => {
  const {
    answers,
    genre,
  } = mock;

  const tree = renderer.create(<GenreQuestionsScreen
    answers={answers}
    genre={genre}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
