"use client";
import React, { useEffect, useRef } from "react";
import styles from "./HomeSlide1.module.scss";

//
import { CustomEase } from "gsap/dist/CustomEase";
import gsap from "gsap";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimaryLayout from "../PrimaryLayout/PrimaryLayout";
import TypewriterHero from "../TypeHero/TypeHero";
import { RightArrow } from "@/src/assets/icons";
import TypingRollText from "../TypingRollText/TypingRollText";

gsap.registerPlugin(CustomEase);

const HomeSlide1 = () => {
  const contentref = useRef(null);
  const contentref2 = useRef(null);
  const contentref3 = useRef(null);
  const buttonContent1 = useRef(null);
  const buttonContent2 = useRef(null);
  const animation = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const animation4 = useRef(null);

  useEffect(() => {
    animation.current = gsap.to(contentref.current, {
      duration: 1,
      opacity: 1,
      y: "0%",
      rotateX: 0,
      delay: 1,
      ease: "power2.inOut",
      stagger: {
        from: "center",
        amount: 1.5,
      },
    });

    animation2.current = gsap.to(contentref2.current, {
      duration: 1.2,
      opacity: 1,
      y: "0%",
      rotateX: 0,
      delay: 1.5,
      ease: "power2.inOut",
    });

    animation3.current = gsap.to(contentref3.current, {
      duration: 1.3,
      opacity: 1,
      y: "0%",
      delay: 1.7,
      ease: "power2.inOut",
    });

    animation4.current = gsap.to(buttonContent1.current, {
      duration: 1.3,
      opacity: 1,
      y: "0%",
      delay: 1.9,
      ease: "power2.inOut",
    });
    animation4.current = gsap.to(buttonContent2.current, {
      duration: 1.3,
      opacity: 1,
      y: "0%",
      delay: 1.9,
      ease: "power2.inOut",
    });
    return () => {
      animation.current?.kill();
      animation2.current?.kill();
      animation3.current?.kill();
      animation4.current?.kill();
    };
  }, []);

  return (
    <section className={styles.HomeSlide1} id="home">
      <div className={styles.background1}></div>
      <div className={styles.background2}></div>

      <div className={styles.main}>
        <div className={styles.hero} ref={contentref}>
          <TypewriterHero />
        </div>
        <div className={styles.heading}>
          <h1 className="font-sora" ref={contentref}>
            We Democratize <br />
            <span className={styles.colourText}>{<TypingRollText />}</span>
          </h1>
        </div>
        <div className={styles.heading}>
          <h1 className="font-sora" ref={contentref2}>
            <span className={styles.colourText2}> Investing </span>
          </h1>
        </div>
        <div className={styles.desb}>
          <p ref={contentref3}>
            Create backtest and deploy Quant AI/ML portfolios without writing
            code.<br></br> Harness the power of data - driven decision.
          </p>
        </div>

        <div className={styles.button}>
          <div ref={buttonContent1} className={styles.buttonContent}>
            <PrimaryButton
              title={"Get Started"}
              className={styles.getStarted}
              icon={<RightArrow />}
            />
          </div>
          <div ref={buttonContent2} className={styles.buttonContent}>
            <PrimaryButton
              title={"Watch Demo"}
              className={styles.demo}
              textStyle={styles.textStyle}
              icon={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlide1;
