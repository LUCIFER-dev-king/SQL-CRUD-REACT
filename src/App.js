import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import Createpost from "./pages/createpost";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/createpost' exact component={Createpost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
