import React from "react";
import styles from "./HomeSlide3.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const HomeSlide3 = () => {
  return (
    <div className={styles.HomeSlide3}>
      <div className={styles.rotateBackground} />
      <div className={styles.slide3}>
        <h1 className={styles.heading}>Ready for future Investing?</h1>
        <p className={styles.desc}>
          Join thousands of invension who are already using kalpi Capital to
          build Quant portfolios
        </p>
        <div className={styles.button}>
          <PrimaryButton
            className={styles.primary}
            title={"Start Free Trial"}
            textStyle={styles.text1}
            link={"/"}
          />
          <PrimaryButton
            title={"Schedule Demo"}
            className={styles.secondary}
            textStyle={styles.text2}
            link={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSlide3;
