import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Signin from '/imports/ui/pages/Signin';
import Signup from '/imports/ui/pages/Signup';
import RandomJoke from '/imports/ui/pages/RandomJoke';
import JokeForm from '/imports/ui/pages/JockForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exaxt path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/random-joke" component={RandomJoke} />
        <Route path="/joke-form" component={JokeForm} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;