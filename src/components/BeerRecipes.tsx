import React from "react";
import { useBeerStore } from "../store/store";
import BeerRecipe from "./BeerRecipe";

const BeerRecipes: React.FC<{
    index: number
}> = ({index}) => {

    const beerRecipes = useBeerStore(state => state.beerRecipes)
    
    return <div className="container d-flex flex-wrap justify-content-center mt-1">
        {beerRecipes.slice(index, index + 5).map((beerRecipe, index) => {
            return <BeerRecipe {...beerRecipe} key={index}/>
        })}
    </div>
}

export default BeerRecipes