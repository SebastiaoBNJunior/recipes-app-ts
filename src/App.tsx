import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import MainScreenFood from './pages/MainScreenFood';
import MainScreenDrink from './pages/MainScreenDrink';
import DetailsFood from './pages/detailsFood';
import DetailsDrink from './pages/DetailsDrink';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipe from './pages/FavoriteRecipe';
import Recipes from './pages/Recipes';
import Footer from './components/Footer';
// import RecipeDetails from './pages/RecipeDetails';

function App() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/meals/:id-da-receita" element={ <MainScreenFood /> } />
        <Route path="/drinks/:id-da-receita" element={ <MainScreenDrink /> } />
        <Route path="/meals/:id-da-receita/in-progress" element={ <DetailsFood /> } />
        <Route path="/drinks/:id-da-receita/in-progress" element={ <DetailsDrink /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/done-recipes" element={ <DoneRecipes /> } />
        <Route path="/favorite-recipes" element={ <FavoriteRecipe /> } />
        {/* <Route path="/meals/:id-da-receita" element={ <RecipeDetails /> } />
        <Route path="/drinks/:id-da-receita" element={ <RecipeDetails /> } /> */}
        <Route path="/meals" element={ <Recipes /> } />
        <Route path="/drinks" element={ <Recipes /> } />
      </Routes>

      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
