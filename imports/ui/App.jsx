import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Signin from '/imports/ui/pages/Signin';
import Signup from '/imports/ui/pages/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exaxt path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;