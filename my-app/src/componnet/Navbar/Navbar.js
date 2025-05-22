"use client";
import React, { useState } from "react";
import Link from "next/link";

import cx from "classnames";

import styles from "./Navbar.module.scss";
import NavLink from "../NavLink/NavLink";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import { Hamburger, MainLogo, RightArrow } from "@/src/assets/icons";

const Navbar = ({ variant }) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <nav className={cx(styles.Navbar, { [styles.NavbarVariant]: true })}>
      <div className={styles.gradient} />
      <Link
        className={styles.logo}
        href={{
          pathname: "/",
        }}
        scroll={true}
      >
        <MainLogo />
      </Link>

      <div className={styles.navList}>
        <NavLink
          item={{ label: "Strategy Buiilder" }}
          className={styles.list}
          link={"/"}
          variant={variant}
        />
        <NavLink
          item={{ label: "My Stategies" }}
          className={styles.list}
          link={"/"}
          variant={variant}
        />
        <NavLink
          item={{ label: "Backtest" }}
          className={styles.list}
          link={"/"}
          variant={variant}
        />
        <NavLink
          item={{ label: "Market Place" }}
          className={styles.list}
          link={"/"}
          variant={variant}
        />
      </div>
      <div className={styles.rightContainer}>
        <PrimaryButton link={"/"} title={"Sign Up"} icon={<RightArrow />} />
      </div>
      <div className={styles.sidebarIcon} onClick={handleVisible}>
        <MobileSideMenu handleClick={handleVisible} isOpen={visible} />
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
