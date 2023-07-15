import React, { useEffect, useState } from "react";
import { beerRecipe, useBeerStore } from '../store/store'

const BeerRecipePage: React.FC<beerRecipe> = (beerRecipe) => {

    return <div className='container d-flex justify-content-between' >
        <div className='w-25'>
            <img className='m-3' src={beerRecipe.image_url} width="100px" alt="beer recipe" />
        </div>
        <div className='w-75'>
            <div className=''><strong>Recipe</strong>: {beerRecipe.name}</div>
            <div className='font-italic'>{beerRecipe.tagline}</div>
            <div><strong>First brewed</strong>: {beerRecipe.first_brewed}</div>
            <div><strong>Alcohol by Volume</strong>: {beerRecipe.abv}</div>
            <div><strong>Beer color intensity</strong>: {beerRecipe.srm}</div>
            <div><strong>Fermentation at</strong>: {beerRecipe.method.fermentation.temp.value} degrees {beerRecipe.method.fermentation.temp.unit}</div>
            <hr />
            <div><strong>Food pairing</strong>:
                <div>{beerRecipe.food_pairing.map(food => <div>{food}</div>)}</div>
            </div>
            <hr />
            <div><strong>Description</strong>: {beerRecipe.description}</div>
            <hr />
            <div className='d-flex justify-content-between'><strong>Ingredients malt:</strong> {beerRecipe.ingredients.malt.map(ingridient => {
                return <div>
                    <div>Name: {ingridient.name}</div>
                    <div>Amount: {ingridient.amount.value} kg</div>
                </div>
            })}</div>
        </div>
    </div>
}

export default BeerRecipePage