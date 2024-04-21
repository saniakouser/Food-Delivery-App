

import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MealsDetails({ params }) {
    let meal = null;
    try {
        meal = await getMeal(params.mealSlug);
    } catch (error) {
        console.error("Error fetching meal:", error);
    }

    if (!meal) {
        notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br>');


    return (
        <>
            <header className={classes.header}>
                <div className={classes.images}>
                    <Image src={meal.image} alt="Meal Image" width={500} height={300} />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions // Make sure meal.instructions is safe
                    }}
                ></p>
            </main>
        </>
    );
}
