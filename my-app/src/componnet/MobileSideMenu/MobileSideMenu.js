import React from "react";
import Link from "next/link";
import cx from "classnames";

import styles from "./MobileSideMenu.module.scss";
import {
  CrossIcon,
  Facebook,
  Instagram,
  Linkdin,
  MainLogo,
  Twitter,
} from "@/src/assets/icons";

const MobileSideMenu = ({ handleClick, isOpen }) => {
  return (
    <div className={cx(styles.MobileSideMenu, { [styles.visible]: isOpen })}>
      <div className={styles.navbar}>
        <Link href={{ pathname: "/" }} scroll className={styles.logo}>
          <MainLogo />
        </Link>
        <div className={styles.crossIcon} onClick={handleClick}>
          <CrossIcon />
        </div>
      </div>

      <div className={styles.navlist}>
        <Link
          href={{
            pathname: "/",
          }}
          scroll
          className={styles.list}
        >
          Strategy Buiilder
        </Link>
        <Link
          href={{
            pathname: "/",
          }}
          scroll
          className={styles.list}
        >
          My Stategies
        </Link>
        <Link
          href={{
            pathname: "/",
          }}
          scroll
          className={styles.list}
        >
          Back Test
        </Link>
        <Link
          href={{
            pathname: "/",
          }}
          scroll
          className={styles.list}
        >
          Market Place
        </Link>
        <Link
          href={{
            pathname: "/",
          }}
          scroll
          className={styles.list}
        >
          Sign Up
        </Link>
      </div>
      <div className={styles.socialLink}>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Facebook />
          </div>
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Instagram />
          </div>
        </a>

        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Twitter />
          </div>
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Linkdin />
          </div>
        </a>
      </div>
      <div className={styles.terms}>
        <p className={styles.text}>©2025 Kalpit Capital</p>
        <p className={styles.text}>
          <a href="/privacy">Privacy</a> | <a href="/Terms&conditions">T & C</a>
        </p>
      </div>
    </div>
  );
};

export default MobileSideMenu;
