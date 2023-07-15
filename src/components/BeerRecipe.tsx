import React, { useEffect, useState } from "react";
import { beerRecipe, useBeerStore } from '../store/store'
import { useNavigate } from "react-router-dom";

const BeerRecipe: React.FC<beerRecipe> = (beerRecipe) => {
    const setSelectedBeerRecipe = useBeerStore(state => state.setSelectedBeerRecipe)
    const selectedBeerRecipes = useBeerStore(state => state.selectedBeerRecipes)
    const setClickedBeerRecipe = useBeerStore(state => state.setClickedBeerRecipe)
    const [toogleSelected, setToogleSelected] = useState<boolean>(false)

    const navigate = useNavigate()
    const redirectToSomePage = (redirectPath: string) => {
        navigate(redirectPath, { replace: true })
    }

    useEffect(() => {
        setToogleSelected(false)
    }, [])

    useEffect(() => {
        selectedBeerRecipes.forEach(selectedBeerRecipe => {
            if (selectedBeerRecipe.name === beerRecipe.name) setToogleSelected(true)
        })
    })
    const selectBeerRecipe = (beerRecipe: beerRecipe) => {
        setSelectedBeerRecipe(beerRecipe)
    }

    return <div className='card beerRecipe text-center d-inline-flex justify-content-between beerCard' onContextMenu={(event) => {
        event.preventDefault()
        selectBeerRecipe(beerRecipe)
        setToogleSelected(!toogleSelected)
    }} onClick={() => {
        redirectToSomePage(`/beer-recipe/${beerRecipe.id}`)
        setClickedBeerRecipe(beerRecipe)
    }}>
        <div className="selectedContainer">
            {toogleSelected ? <div className='selectedItem'>Selected</div> : null}
        </div>
        <div className='w-100 text-center'>
            <img className='m-3' src={beerRecipe.image_url} width="100px" alt="beer recipe" />
        </div>
        <div className=''>
            <div className='font-weight-bold text-lg-center beerRecipeName'>Recipe: {beerRecipe.name}</div>
            <div className='font-italic'>{beerRecipe.tagline}</div>
            <div><strong>First brewed</strong>: {beerRecipe.first_brewed}</div>
            <div><strong>Alcohol by Volume</strong>: {beerRecipe.abv}</div>
            <div><strong>Beer color intensity</strong>: {beerRecipe.srm}</div>
            <div><strong>Fermentation at</strong>: {beerRecipe.method.fermentation.temp.value} degrees {beerRecipe.method.fermentation.temp.unit}</div>
            {/* <div><strong>Food pairing</strong>: 
            <div className='foodPairing'>{beerRecipe.food_pairing.map(food => <div>{food}</div>)}</div>
            </div> */}
        </div>
    </div>
}

export default BeerRecipe