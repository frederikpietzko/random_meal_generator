import React from "react";
import { connect } from "react-redux";

import Instructions from "./Instructions";

const Meal = props => {
  return (
    <div>
      <img
        alt={props.strMeal}
        className="ui fluid image"
        src={props.strMealThumb}
      />
      <div className="ui four column grid">
        <div className="two column row">
          <div className="column">
            <h2 className="ui header">{props.title}</h2>
            {props.category}
          </div>
        </div>
        <div className="two column row">
          <div className="column">
            <img
              alt={props.strMeal}
              className="ui large rounded image"
              src={props.thumbnail}
            ></img>
          </div>
          <div className="column">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {props.ingredients.map(ingredient => {
                  return (
                    <tr key={ingredient}>
                      <td data-label="Ingredient">{ingredient[0]}</td>
                      <td data-labe="Measure">{ingredient[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="sixteen column row">
          {props.tags
            ? props.tags.split(",").map(tag => {
                return (
                  <div className="column" key={tag}>
                    <div className="ui label">{tag}</div>
                  </div>
                );
              })
            : null}
        </div>

        <div className="one column row">
          <div className="column">
            <h4 className="ui heading">Instructions</h4>
          </div>
        </div>
        <div className="one column row">
          <div className="column">
            <Instructions text={props.instructions} />
          </div>
        </div>

        {props.youtube ? (
          <div className="one column row">
            <div className="column">
              <h4 className="ui heading">Video Instructions:</h4>
              <a href={props.youtube}>Link</a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = ({ randomMeal }) => {
  const ingredients = [];
  for (let i = 1; i < 21; i++) {
    if (randomMeal["strIngredient" + i]) {
      ingredients.push([
        randomMeal["strIngredient" + i],
        randomMeal["strMeasure" + i]
      ]);
    }
  }
  return {
    title: randomMeal.strMeal,
    category: randomMeal.strCategory,
    area: randomMeal.strArea,
    thumbnail: randomMeal.strMealThumb,
    tags: randomMeal.strTags,
    instructions: randomMeal.strInstructions,
    ingredients: ingredients,
    youtube: randomMeal.strYoutube
  };
};

export default connect(mapStateToProps, null)(Meal);
