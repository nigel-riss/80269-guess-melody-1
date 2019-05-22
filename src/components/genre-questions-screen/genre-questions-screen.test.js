import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionsScreen from './genre-questions-screen.jsx';

const mock = {
  question: {
    type: `genre`,
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
    ],
  },
};

it(`GenreQuestionsScreen is rendered correctly`, () => {
  const {question} = mock;

  const tree = renderer.create(<GenreQuestionsScreen
    onAnswer={jest.fn()}
    question={question}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
