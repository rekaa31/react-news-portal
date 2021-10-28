import React from "react";
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import Navbar from "./Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../page/Home";
import NewsDetail from "../page/NewsDetail";

function App() {
  return (
    <React.Fragment>
      <Router>
        
        <Navbar />

        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/news/:id">
              <NewsDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
