import React from "react";
import "./RecipeForm.css";

const ReactForm = () => {
  return (
    <div>
      <form>
        <div className="form-controls">
          <div className="form-controls-1">
            <div className="form-control">
              <label>Recipe Name</label>
              <input type="text" />
            </div>

            <div className="form-control">
              <label>Type of Meal</label>
              <select>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
              </select>
            </div>

            <div className="form-control">
              <label>Description</label>
              <input type="text" />
            </div>

            <div className="form-control">
              <label>Cuisine</label>
              <select>
                <option>North Indian</option>
                <option>South Indian</option>
                <option>Chinese</option>
                <option>Italian</option>
              </select>
            </div>
          </div>

          <div className="form-controls-2">
            <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/tomato-upma-recipe.jpg" />
          </div>
        </div>
        <div className="form-ingredients">
          <div className="form-ingredinets-label">Create recipe</div>
          <div className="form-ingredient-controls">
            <div className="form-ingredient-control">
              <input type="text" placeholder="Ingredinets" />
            </div>
            <div className="form-ingredient-control">
              <select>
                <option>Qty</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="form-ingredient-control">
              <select>
                <option>Process</option>
                <option>Boil</option>
                <option>Soak</option>
                <option>Fry</option>
              </select>
            </div>
            <div className="form-ingredient-control">
              <select>
                <option>Time</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            {/* <div className="form-ingredient-control">
              <input type="text" placeholder="1 Serving" disabled />
            </div> */}
            <div className="form-ingredient-control">
              <button>Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReactForm;
