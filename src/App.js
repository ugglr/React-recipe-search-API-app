import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";

const API_KEY = "7a4241b148f3d499670f6d2851c57c05";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map(recipe => {
          return <p key={recipe.recipe_id}>{recipe.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
