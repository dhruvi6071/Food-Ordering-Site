// import { useState } from "react";
// import { useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "./hooks/usehttp";

// import Button from "./UI/Button";

const requestConfig = {} // object will be created only once if we use {} directly in request it may cause to create object every time component run which can create infinite loop.

export default function Meals() {
  const {
    data: loadMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);


  console.log(loadMeals);

  // const [loadMeals, setLoadMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     if (!response.ok) {
  //       //...
  //     }
  //     //To convert data from backend into jsx method we must need to add .json method.
  //     const meals = await response.json();

  //     setLoadMeals(meals);
  //   }
  //   fetchMeals();
  // }, []);

  if(isLoading){
    return <p>Fetching meals...</p>
  }

  // if(!data) {
  //   return <p>No meals found...</p>
  // }

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

