import React from "react";
import { connect } from "react-redux";
import GetMeal from "./GetMeal";
import Header from "./Header";
import Meal from "./Meal";

const App = props => {
  return (
    <div className="ui container">
      <Header />
      <GetMeal />
      {props.randomMeal != null ? <Meal /> : null}
    </div>
  );
};

const mapStateToProps = ({ randomMeal }) => {
  return { randomMeal };
};

export default connect(
  mapStateToProps,
  null
)(App);
