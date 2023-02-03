import React from "react";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  return (
    //  tenth section(testimonials)

    <div className={styles.testimonials}>
      {/* testimonials first part  */}
      <h1>Happy Customers</h1>
      {/* testimonials second part  */}
      <div className={styles["happyCustomers-container"]}>
        {/* testimonials-second part-first part  */}
        <div className={styles["bestSellers-slide-left"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={styles["slide-left-icon"]}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {/* testimonials-container-second part-second part  */}
        <div
          className={`${styles["testimonialContent"]} ${styles["testimonialContent1"]}`}
        >
          <div
            className={`${styles["testimonialDescription"]} ${styles["testimonialDescription1"]}`}
          >
            <div className={styles.testimonialQuote}>
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svgQuote}
              >
                <path
                  d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            <div className={styles.testimonialText}>
              We bought a backdrop from Special You to surprise our daughter and
              she was so happy to see all the decoration
            </div>
          </div>
          <div
            className={`${styles.testimonialUser} ${styles.testimonialUser1}`}
          >
            <div
              className={`${styles.testimonialFace} ${styles.testimonialFace1}`}
            ></div>
            <div className={styles.testimonialName}>Leslie Alexander</div>
          </div>
        </div>
        {/* testimonials-container-second part-third part  */}
        <div
          className={`${styles["testimonialContent"]} ${styles["testimonialContent2"]}`}
        >
          <div
            className={`${styles["testimonialDescription"]} ${styles["testimonialDescription2"]}`}
          >
            <div className={styles.testimonialQuote}>
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svgQuote}
              >
                <path
                  d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            <div className={styles.testimonialText}>
              We bought a backdrop from Special You to surprise our daughter and
              she was so happy to see all the decoration
            </div>
          </div>
          <div
            className={`${styles.testimonialUser} ${styles.testimonialUser2}`}
          >
            <div
              className={`${styles.testimonialFace} ${styles.testimonialFace2}`}
            ></div>
            <div className={styles.testimonialName}>Guy Hawkins</div>
          </div>
        </div>
        {/* testimonials-container-second part-fourth part  */}
        <div
          className={`${styles["testimonialContent"]} ${styles["testimonialContent3"]}`}
        >
          <div
            className={`${styles["testimonialDescription"]} ${styles["testimonialDescription3"]}`}
          >
            <div className={styles.testimonialQuote}>
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svgQuote}
              >
                <path
                  d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            <div className={styles.testimonialText}>
              We bought a backdrop from Special You to surprise our daughter and
              she was so happy to see all the decoration
            </div>
          </div>
          <div
            className={`${styles.testimonialUser} ${styles.testimonialUser3}`}
          >
            <div
              className={`${styles.testimonialFace} ${styles.testimonialFace3}`}
            ></div>
            <div className={styles.testimonialName}>Brooklyn Simmons</div>
          </div>
        </div>
        {/* testimonials-container-second part-fifth part  */}
        <div className={styles["bestSellers-slide-right"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={styles["slide-right-icon"]}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      {/* testimonials third part(below shapes)  */}
      <div className={styles.shapes}>
        <span className={`${styles.shape1} ${styles.shapeRec}`}></span>
        <span className={`${styles.shape2} ${styles.shapeCir}`}></span>
        <span className={`${styles.shape3} ${styles.shapeCir}`}></span>
        <span className={`${styles.shape4} ${styles.shapeCir}`}></span>
        <span className={`${styles.shape5} ${styles.shapeCir}`}></span>
      </div>
    </div>
  );
};

export default Testimonials;
