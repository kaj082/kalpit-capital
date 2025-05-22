"use client";
import React, { useLayoutEffect } from "react";
import cx from "classnames";

import styles from "./Slide4.module.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Dashboard,
  FlashIcon,
  Machine,
  Progress,
  Security,
  Users,
} from "@/src/assets/icons";
import { checkMobile } from "@/src/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const Slide4 = () => {
  const cardRef1 = React.useRef(null);
  const cardRef2 = React.useRef(null);
  const cardRef3 = React.useRef(null);
  const cardRef4 = React.useRef(null);
  const cardRef5 = React.useRef(null);
  const cardRef6 = React.useRef(null);

  const slideRef = React.useRef(null);
  const slideDataRef = React.useRef(null);

  useLayoutEffect(() => {
    const startAnimation = () => {
      ScrollTrigger.create({
        trigger: slideDataRef.current,
        start: "top top",
        end: "bottom bottom",
        endTrigger: slideRef.current,
        pin: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slideRef.current,
          start: "top center",
          end: "bottom bottom",
          endTrigger: slideRef.current,
          scrub: true,
          pinReparent: !checkMobile(),
        },
      });

      tl.add("firstContent", 0);
      tl.add("secondContent");

      tl.fromTo(cardRef1.current, { y: 400 }, { y: 0, ease: "power2.out" })
        .fromTo(
          cardRef1.current,
          { scale: 1 },
          { scale: 0.85, ease: "power2.out" }
        )

        .to(cardRef2.current, { y: -300, ease: "power2.out" })
        .fromTo(
          cardRef2.current,
          { scale: 1 },
          { scale: 0.9, ease: "power2.out" }
        )

        .to(cardRef3.current, { y: -600, ease: "power2.out" })
        .fromTo(
          cardRef3.current,
          { scale: 1 },
          { scale: 0.925, ease: "power2.out" }
        )

        .to(cardRef4.current, { y: -900, ease: "power2.out" })
        .fromTo(
          cardRef4.current,
          { scale: 1 },
          { scale: 0.95, ease: "power2.out" }
        )

        .to(cardRef5.current, { y: -1200, ease: "power2.out" })
        .fromTo(
          cardRef5.current,
          { scale: 1 },
          { scale: 0.975, ease: "power2.out" }
        )

        .to(cardRef6.current, { y: -1500, ease: "power2.out" })
        .fromTo(
          cardRef6.current,
          { scale: 1 },
          { scale: 1, ease: "power2.out" }
        ); // no scale change
    };

    setTimeout(startAnimation, 0);

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div
      ref={slideRef}
      style={{ height: "200vh", background: "", zIndex: "1" }}
    >
      <div className={styles.Slide4} ref={slideDataRef}>
        <div className={cx(styles.card)} ref={cardRef1}>
          <div className={styles.cardIcon}>{<FlashIcon />}</div>
          <p className={styles.cardData}>No-Code strategy builder </p>
          <p className={styles.description}>
            Build complex quantative strategies with our intuitive click and
            drop interface. No code required
          </p>
        </div>
        <div className={cx(styles.card)} ref={cardRef2}>
          <div className={styles.cardIcon}>{<Dashboard />}</div>
          <p className={styles.cardData}>Advanced Backtesting </p>
          <p className={styles.description}>
            Test your strategies against historical data with detailed
            performance metrics and analytics
          </p>
        </div>
        <div className={cx(styles.card)} ref={cardRef3}>
          <div className={styles.cardIcon}>{<Progress />}</div>
          <p className={styles.cardData}>Portfolio creation</p>
          <p className={styles.description}>
            create equal & custom weighted portfolios with ease with rebalancing
            options
          </p>
        </div>
        <div className={cx(styles.card)} ref={cardRef4}>
          <div className={styles.cardIcon}>{<Machine />}</div>
          <p className={styles.cardData}>Machine Learning & AI strategy</p>
          <p className={styles.description}>
            Use AI/ML techniques to build , combine and optimize Strategies.
          </p>
        </div>
        <div className={cx(styles.card)} ref={cardRef5}>
          <div className={styles.cardIcon}>{<Users />}</div>
          <p className={styles.cardData}>Strategy Marketplace</p>
          <p className={styles.description}>
            Discover and subscribe to proven strategies from professional Quant
            researchers in our marketplace.
          </p>
        </div>
        <div className={cx(styles.card)} ref={cardRef6}>
          <div className={styles.cardIcon}>{<Security />}</div>
          <p className={styles.cardData}>Multi-factor Model</p>
          <p className={styles.description}>
            create multi-factor portfolios for robust risk adjusted returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
