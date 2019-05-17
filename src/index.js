import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const onWelcomeScreenClick = () => {
  // console.log(`Play button clicked`);
  // alert(`Play button clicked`);
};

const init = () => {
  ReactDOM.render(<App
    time = {5}
    errorCount = {3}
    onClick = {onWelcomeScreenClick}
  />, document.querySelector(`.main`));
};

init();
