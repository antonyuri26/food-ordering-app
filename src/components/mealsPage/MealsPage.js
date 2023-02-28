import React from "react";
import { useLoaderData, json, useParams } from "react-router-dom";

import MealsList from "../mealsPage/MealsList";
import MealsWrapper from "./MealsWrapper";

const MealsPage = () => {
  const mealList = useLoaderData();

  const CategoryName = useParams();

  let content = <p>Found No Meals</p>;

  if (mealList.length) {
    content = <MealsList meals={mealList} categoryName={CategoryName} />;
  }

  return <MealsWrapper content={content} CategoryName={CategoryName} />;
};

export default MealsPage;

//requesting category
export async function loader({ request, params }) {
  const id = params.categoryId;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
  );

  const data = await res.json();
  const mealList = data.meals.map((item) => {
    return {
      title: item.strMeal.substring(0, 36),
      id: item.idMeal,
      image: item.strMealThumb,
      price: Math.floor(Math.random() * 20) + 10,
    };
  });

  if (!res.ok) {
    throw json({ message: "Could not Find the data" }, { status: 505 });
  } else {
    return mealList;
  }
}
