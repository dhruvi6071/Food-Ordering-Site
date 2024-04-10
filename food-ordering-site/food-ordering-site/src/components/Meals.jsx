import { response } from "express";



export default function Meals() {
    async function fetchMeals(){
        const response = await fetch('http://localhost:3000/meals');
    
        if(!response.ok) {
            //...
        }
    //To convert data from backend into jsx method we must need to add .json method.
      const meals = await response.json();
}
      
    return <ul id="meals"></ul>
}