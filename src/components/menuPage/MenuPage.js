import React, { useState, useEffect, useCallback } from "react";
import { Spinner } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import CategoryWrapper from "./CategoryWrapper";

const MenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Something Went Wrong. Please Try again.");
      }

      const data = await response.json();

      const dataFetched = data.categories.map((item) => {
        return {
          id: item.idCategory,
          category: item.strCategory,
          image: item.strCategoryThumb,
        };
      });
      setCategories(dataFetched);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMealsData();
  }, [fetchMealsData]);

  let content = <p>Found No Meal</p>;

  if (categories.length) {
    content = <CategoryList categories={categories} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div style={{ margin: "auto", display: "flex" }}>
        <Spinner color="red.500" alignSelf={"center"} />
      </div>
    );
  }

  return <CategoryWrapper content={content} />;
};

export default MenuPage;
