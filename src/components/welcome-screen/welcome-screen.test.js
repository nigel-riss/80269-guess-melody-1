import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      gameTime = {0}
      errorCount = {0}
      onClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
