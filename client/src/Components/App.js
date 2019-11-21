import "./App.css";
import React from "react";
import { connect } from "react-redux";
import GetMeal from "./GetMeal";
import Header from "./Header";
import Meal from "./Meal";

const App = props => {
  return (
    <div className="content">
      <div className="ui container">
        <Header />
        <GetMeal />
        {props.randomMeal != null ? <Meal /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = ({ randomMeal }) => {
  return { randomMeal };
};

export default connect(mapStateToProps, null)(App);
