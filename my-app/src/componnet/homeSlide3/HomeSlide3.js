"use client";
import React, { useLayoutEffect } from "react";
import styles from "./HomeSlide3.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeSlide3 = () => {
  const slideRef = React.useRef(null);

  useLayoutEffect(() => {
    const el = slideRef.current;

    gsap.fromTo(
      el,
      { y: 100 },
      {
        y: -100,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className={styles.HomeSlide3} ref={slideRef}>
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
