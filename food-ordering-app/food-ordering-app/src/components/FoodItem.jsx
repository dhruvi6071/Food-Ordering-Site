import { currencyFormatter } from "../util/formatting";

export default function FoodItem({meal}) {
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button>I wish to Buy it!</button>
                </p>
            </article>
        </li>
    );
}