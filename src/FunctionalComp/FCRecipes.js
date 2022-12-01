import React from "react";
import FCRecipe from "./FCRecipe";


export default function FCRecipes({recipes,addRec}) {

    const z = recipes.map(recipe =>{
        return(
            <FCRecipe key={recipe.img}  recipe={recipe}   addRec={addRec}  />  

        )  
    })

 
    return (

        <div className="pRecipes" style={{height: '475px'}}>{z}</div>

    );
  }