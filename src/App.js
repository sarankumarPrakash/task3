import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserMaster from './UserMaster';
import {NotFound} from './NotFound';

function App() {
  return (
    <div className="App">
     <Router>
          <div className={'main-container'}>
            <Switch>
              <Route path="/notfound" component={NotFound} />
              <Route component={UserMaster} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
