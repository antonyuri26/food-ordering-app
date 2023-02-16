import React from "react";
import { useLoaderData } from "react-router";
import { json } from "react-router";
import Header from "./Header";
import PopFoods from "./PopFoods";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import Blog from "./Blog";
import MainHeading from "./MainHeading";
import { Box, Flex } from "@chakra-ui/layout";

const HomePage = () => {
  const popMeals = useLoaderData();

  return (
    <>
      <Box
        css={{
          background: "rgb(250,250,250)",
          background:
            "linear-gradient(0deg, rgba(250,250,250,1) 80%, rgba(224,217,217,1) 100%)",
        }}
      >
        <Header />
        <MainHeading>Popular Meals</MainHeading>
        <PopFoods popMeals={popMeals} />
        <PopFoods popMeals={popMeals} />
        <MainHeading>Why Hungry?</MainHeading>
        <WhyUs />
        <Testimonials />
        <Flex justifyContent={"space-around"} mt={"2rem"}>
          <Blog />
          <Blog />
          <Blog />
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;

export async function loader() {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
  );

  const data = await res.json();
  console.log(data.meals);
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
