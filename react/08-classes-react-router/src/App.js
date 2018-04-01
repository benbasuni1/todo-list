import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={() => <About title="About"/>}/>
            <Route exact path="/teachers" render={() => <Teachers/>}/>
            <Route path="/teachers/:topic/:name" component={Featured}/>}/>
            <Route path="/courses" component={Courses}/>
            <Route component={NotFound}/>
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;