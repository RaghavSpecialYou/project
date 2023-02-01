import React from "react";
import styles from "./homepage.module.css";
import HomePageFirst from "./homepagefirst/HomePageFirst";
import HomePageSecond from "./homepagesecond/HomePageSecond";

const HomePage = () => {
  return (
    <>
      <HomePageFirst />
      <HomePageSecond />
    </>
  );
};

export default HomePage;
