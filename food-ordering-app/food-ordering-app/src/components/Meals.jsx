import { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

export default function Meals() {
  const [loadMeals, setLoadMeals] = useState([]);
  //If we got no dependencies or if we got dependencies that never change, this code will never execute again and therefore, we won't have an infinite loop.
  
  useEffect(() => {
    //This function is responsible for making an asynchronous request to a server to get meal data.
    
    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals'); //To send an http request

      if (!response.ok) {
        console.log("There is an error.");
      }
      const meals = await response.json(); //it tries to parse the response body
      setLoadMeals(meals); //To set loaded meal equal to meals gotten from backend.
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <FoodItem key={meal.id} meal={meal}></FoodItem>
      ))}
    </ul>
  );
}
