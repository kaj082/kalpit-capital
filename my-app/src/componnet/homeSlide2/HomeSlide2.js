import React from "react";
import styles from "./HomeSlide2.module.scss";
import Slide4 from "../Slide4/Slide4";

const HomeSlide2 = () => {
  return (
    <section className={styles.HomeSlide2}>
      <div className={styles.main}>
        <h1 className={styles.heading}>
          Why Choose <span className={styles.colorText}>Kalpi Capital</span>
        </h1>
        <p className={styles.desc}>
          Our Plateform combines powerful technology with an intuitive interface
          to help you <br />
          succeed in systematic portfolio construction.
        </p>
      </div>
      <div className={styles.container}>
        <Slide4 />
      </div>
    </section>
  );
};

export default HomeSlide2;
