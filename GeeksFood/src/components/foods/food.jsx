import  { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import './food.css';
import {NavLink} from "react-router-dom"


const RecipePage = () => {
  
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
        setRecipes(response.data.meals || []);
        console.log(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className='mainContainer'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        recipes.map((recipe) => (
          <div className="recipeContainer" key={recipe.idMeal}>
            <img className='recipeImage'
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <h2 className="recipeName">{recipe.strMeal}</h2>
            <p className='p25'>{recipe.strCategory}</p>
            <NavLink to={`/foods/${recipe.idMeal}`} className="detailsLink">
              View Details
            </NavLink>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default RecipePage;