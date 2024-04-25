// import { useState } from "react";
// import { useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "./hooks/usehttp";
import Error from "./Error";

// import Button from "./UI/Button";

const requestConfig = {} // object will be created only once if we use {} directly in request it may cause to create object every time component run which can create infinite loop.

export default function Meals() {
  const {
    data: loadMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log(loadMeals);

  if(isLoading){
    return <p className="center">Fetching meals...</p>
  }

  if(error){
    return <Error title="Failed to fetch meals" message={error}></Error>
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

