import React from "react";

const SecondBanner = () => {
  return (
    //  eight section(second bannner)
    <div class="secondBanner-container">
      {/* eight section-- first part  */}
      <h1>For Christmas Eve</h1>
      {/* eight section-- second part  */}
      <div class="secondBanner-image-container">
        {/* eight section--second part--first part  */}
        <div class="bestSellers-slide-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="slide-left-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {/* eight section--second part--second part  */}
        <div class="photo2"></div>
        {/* eight section--second part--third part  */}
        <div class="bestSellers-slide-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="slide-right-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      {/* eight section-- third part  */}
      <div class="shapes">
        <span class="shape1 shapeRec"></span>
        <span class="shape2 shapeCir"></span>
        <span class="shape3 shapeCir"></span>
        <span class="shape4 shapeCir"></span>
        <span class="shape5 shapeCir"></span>
      </div>
    </div>
  );
};

export default SecondBanner;
