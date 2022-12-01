import React from "react";
import FCRecipe from "./FCRecipe";


export default function FCRecipesDone({recipes,addRecDone,counter}) {

    const z = recipes.map(recipe =>{
        return(

            <FCRecipe key={recipe.img}  recipe={recipe}   addRec={addRecDone}  />  

        )  
    })

 
    return (

        <div className="pDoneRecipes">

            <div>
                <h1>Ready to EAT!</h1>
                <h3>Recipes made: {counter}</h3>
            </div>

            <div style={{height: '475px'}}>{z}</div>

        </div>

    );
  }