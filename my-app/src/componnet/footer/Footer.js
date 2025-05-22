import React from "react";
import styles from "./Footer.module.scss";
import { Email, Instagram, Linkdin, Phone } from "@/src/assets/icons";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Logo from "../Logo/Logo";
import FooterNavLink from "../FooterNavlink/FooterNavlink";

const Footer = () => {
  const QuickLink = [
    {
      label: "Strategy Buiilder",
      link: "/",
    },
    {
      label: "Backtest",
      link: "/",
    },
    {
      label: "My Stategies",
      link: "/",
    },
    {
      label: "Market Place",
      link: "/",
    },
  ];
  return (
    <footer className={styles.Footer}>
      <div className={styles.upperContainer}>
        <div className={styles.container}>
          <div>
            <Logo />
          </div>
          <p className={styles.desc}>
            Empowering portfolios managers with advanced quantitative research
            solutions.Build backtest and deploy your strategy with confidence.
          </p>
          <div className={`flex gap-3 items-center ${styles.socialIcons}`}>
            <Instagram />
            <Linkdin />
          </div>
        </div>
        <div className={styles.container}>
          <h2>Quick Links</h2>
          <ul className={styles.list}>
            {QuickLink.map((item, index) => (
              <FooterNavLink
                key={`${item}${index}`}
                link={item.link}
                item={item}
              />
            ))}
          </ul>
        </div>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.icon}>
                <Phone />
              </div>
              <p className={styles.label}>
                <a href="tel:+91 8871911901">+91 8871911901</a>
              </p>
            </li>
            <li className={styles.listItem}>
              <div className={styles.icon}>
                <Email />
              </div>
              <p className={styles.label}>
                <a href="mailto:info@kalpitcapital.com">
                  info@kalpitcapital.com
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.container}>
          <h2>News Letter</h2>
          <p className={styles.desc}>
            Subscribe to our newsletter for the latest updates on market trends
            and quantitative research
          </p>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>
          <PrimaryButton title={"Subscribe"} className={styles.button} />
        </div>
      </div>
      <div className={styles.terms}>
        <p className={styles.text}>©2025 Kalpit Capital. All Rights Reserved</p>
        <p className={styles.text}>
          <a href="/">Terms of service</a> | <a href="/">Privacy Policy</a>|{" "}
          <a href="/">Disclaimer</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
