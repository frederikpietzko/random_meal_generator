import React from "react";
import { connect } from "react-redux";
import { fetchRandomMeal } from "../actions";

const GetMeal = props => {
  return (
    <div className="ui center aligned header">
      <h2 className="ui center aligned icon header">
        <i className="clock outline icon" />
        Are you Hungry?
      </h2>
      <button
        style={{ textAlign: "center" }}
        onClick={() => props.fetchRandomMeal()}
        className="ui center aligned primary button"
      >
        Random Meal
      </button>
    </div>
  );
};

export default connect(
  null,
  { fetchRandomMeal }
)(GetMeal);
