import React from "react";
import styles from "./homepage.module.css";
import HomePageFirst from "./homepagefirst/HomePageFirst";
import HomePageSecond from "./homepagesecond/HomePageSecond";
import HomePageThird from "./homepagethird/HomePageThird";

const HomePage = () => {
  return (
    <>
      <HomePageFirst />
      <HomePageSecond />
      <HomePageThird />
    </>
  );
};

export default HomePage;
