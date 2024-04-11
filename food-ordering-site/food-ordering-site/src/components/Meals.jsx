import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //...
      }
      //To convert data from backend into jsx method we must need to add .json method.
      const meals = await response.json();

      setLoadMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal= {meal} />
      ))}
    </ul>
  );
}
