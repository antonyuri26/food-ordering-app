import { Box } from "@chakra-ui/react";
import classes from "./MealDetails.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";

import MealDetailContent from "./MealDetailsContent";

const MealDetails = (props) => {
  const [meal, setMeal] = useState([
    {
      id: "",
      category: "",
      area: "",
      title: "",
      image: "",
      price: "",
      tags: "",
      ingredients: ["", "", "", "", "", "", ""],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mealDetail1 = props.meal;
  const id = mealDetail1.id;

  useEffect(() => {
    fetchMealData(id);
  }, [id]);

  async function fetchMealData(id) {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (!res.ok) {
        throw json({ message: "Could not Find the data" }, { status: 505 });
      }

      const data = await res.json();

      const mealDetail = data.meals.map((item) => {
        return {
          id: item.idMeal,
          category: item.strCategory,
          area: item.strArea,
          title: item.strMeal.substring(0, 36),
          image: item.strMealThumb,
          price: Math.floor(Math.random() * 20) + 10,
          tags: item.strTags,
          ingredients: [
            item.strIngredient1,
            item.strIngredient2,
            item.strIngredient3,
            item.strIngredient4,
            item.strIngredient5,
            item.strIngredient6,
            item.strIngredient7,
          ],
        };
      });

      setMeal(mealDetail);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  let content;

  if (meal) {
    content = <MealDetailContent meal={meal} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading</p>;
  }

  return <Box className={classes.header}>{content}</Box>;
};

export default MealDetails;
