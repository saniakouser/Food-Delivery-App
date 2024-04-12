
import MealGrid from "@/components/Meals/MealGrid";
import { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

async function Meals(){
    const meal= await getMeals();
    return   <MealGrid meals={meals}/>
}

export default function Meal() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created <span className={classes.highlight}>by You</span></h1>
            </header>
            <p>Choose your Favorite recipe and cook it yourself. It is easy and fun</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favourite Recipe
                </Link>
            </p>

            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals.....</p>}>
                <Meal/>
                </Suspense>
                
            </main>
        </>
    );
}
