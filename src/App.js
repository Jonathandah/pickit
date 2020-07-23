import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./view/Home/Home"
import './App.sass';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exect path="/" component={Home}></Route>
    </div>
    </Router>
  );
}

export default App;
