import React, { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { useBeerStore } from './store/store';
import { Route, Routes } from "react-router-dom";
import BeerRecipePage from './components/BeerRecipePage';
import LazyScroll from './components/LazyScroll';

function App() {

  const baseurl = 'https://api.punkapi.com/'

  const beerRecipes = useBeerStore(state => state.beerRecipes)
  const page = useBeerStore(state => state.page)
  const setPage = useBeerStore(state => state.setPage)
  const setBeerRecipes = useBeerStore(state => state.setBeerRecipes)
  const setBeerRecipesIfNeeded = useBeerStore(state => state.setBeerRecipesIfNeeded)
  const selectedBeerRecipes = useBeerStore(state => state.selectedBeerRecipes)
  const clickedBeerRecipe = useBeerStore(state => state.clickedBeerRecipe)
  const deleteAllSelectedBeerRecipes = useBeerStore(state => state.deleteAllSelectedBeerRecipes)

  useEffect(() => {
    if (beerRecipes.length < 15 && beerRecipes.length !== 0) {
      setPage()
      axios.get(`${baseurl}v2/beers?page=${page + 1}`).then((response) => {
        console.log(response.data)
        setBeerRecipesIfNeeded(response.data)
      })
    }
  }, [beerRecipes])

  useEffect(() => {
    axios.get(`${baseurl}v2/beers?page=${page}`).then((response) => {
      setBeerRecipes(response.data)
    })
  }, [])

  return (
    <div className="App">
      <header className='bg-warning p-2 header'>
        <h1>Beer Recipes</h1>
        {selectedBeerRecipes.length ? <button className='btn btn-dark w-25 mb-2' onClick={() => {
          deleteAllSelectedBeerRecipes()
        }}>Delete</button> : null}
      </header>
      <Routes>
        <Route path='/beer-recipe'>
          {clickedBeerRecipe ? <Route path=':beerId' element={<BeerRecipePage {...clickedBeerRecipe} key={clickedBeerRecipe.id} />} /> : null}
        </Route>
        <Route path='/' element={<LazyScroll />} />
      </Routes>
    </div>
  );
}

export default App;
