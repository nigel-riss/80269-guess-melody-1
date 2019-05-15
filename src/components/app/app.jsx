import React from 'react';
import WelcomeScreen from '../../components/welcome-screen/welcome-screen.jsx';

const App = () => {
  return <WelcomeScreen
    time = {5}
    errorCount = {3}
  />;
};

export default App;
