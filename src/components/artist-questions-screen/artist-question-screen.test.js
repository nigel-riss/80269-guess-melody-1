import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionsScreen from './artist-questions-screen.jsx';

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    },
    answers: [
      {
        picture: `vinyl.png`,
        artist: `John Snow`,
      },
      {
        picture: `vinyl.png`,
        artist: `Jack Daniels`,
      },
      {
        picture: `vinyl.png`,
        artist: `Jim Beam`,
      },
    ],
  },
};

it(`ArtistQuestionsScreen is rendered correctly`, () => {
  const {question} = mock;

  const tree = renderer.create(<ArtistQuestionsScreen
    onAnswer={jest.fn()}
    question={question}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
