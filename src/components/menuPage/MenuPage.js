import React, { useState, useEffect, useCallback } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import SideBar from "../layout/SideBar";

const MenuPage = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

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
      setMeals(dataFetched);
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

  if (meals.length) {
    content = <CategoryList meals={meals} />;
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

  return (
    <Flex background={"rgb(224,217,217)"}>
      {/* <Box marginRight={"1rem"}> */}
      {/* <Heading>Menu Page</Heading> */}
      <SideBar />
      {/* </Box> */}
      {content}
    </Flex>
  );
};

export default MenuPage;
