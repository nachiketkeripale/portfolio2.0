import Header from './components/Header.js'
import Projects from './components/Projects.js'
import MainBody from './components/MainBody.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div>
      {/* <MainBody></MainBody> */}
      <Router>
      <Header></Header>
      <Switch>
        <Route path="/" component={<MainBody/>} />
      </Switch>
    </Router>

    </div>
  );
}

export default App;
