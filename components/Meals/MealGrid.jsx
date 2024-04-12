import React from 'react'
import classes from "./MealGrid.module.css"
import MealItem from './MealItem'
export default function MealGrid({meals}) {
  return <ul className={classes.meals}>
  {meals.map((meal)=>{
    return (
    <li key={meal.id}><MealItem {...meal}  /></li>
    )
  })}
  </ul>
   
}
