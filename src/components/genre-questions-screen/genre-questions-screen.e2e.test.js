import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionsScreen from './genre-questions-screen.jsx';

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
    ],
  },
};

it(`When user answers genre question form is not sent`, () => {
  const {question} = mock;
  const onAswer = jest.fn();
  const genreQuestion = mount(<GenreQuestionsScreen
    onAnswer = {onAswer}
    question = {question}
  />);

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
