import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import GetMeal from "./GetMeal";
import Header from "./Header";
import Meal from "./Meal";

const Meals = props => {
  return (
    <>
      <GetMeal />
      {props.randomMeal != null ? <Meal /> : null}
    </>
  );
};

const App = props => {
  return (
    <Router history={history}>
      <div className="content">
        <div className="ui container">
          <Header />
          <Switch>
            <Meals randomMeal={props.randomMeal} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = ({ randomMeal }) => {
  return { randomMeal };
};

export default connect(
  mapStateToProps,
  null
)(App);
