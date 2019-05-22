import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistQuestionsScreen from './artist-questions-screen.jsx';

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `artist`,
    src: `path`,
    answers: [
      {
        picture: `vinyl.png`,
        artist: `John Snow`,
      },
    ],
  },
};

it(`When user clicks on option callback is called`, () => {
  const {question} = mock;
  const onAswer = jest.fn();
  const genreQuestion = mount(<ArtistQuestionsScreen
    onAnswer = {onAswer}
    question = {question}
  />);

  const form = genreQuestion.find(`form`);

  form.simulate(`change`);

  expect(onAswer).toHaveBeenCalledTimes(1);
});
