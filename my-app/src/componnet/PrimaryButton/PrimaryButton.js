"use client";
import React, { useEffect, useRef } from "react";
import cx from "classnames";
import styles from "./PrimaryButton.module.scss";
import { useRouter } from "next/navigation";
import { RightArrow } from "@/src/assets/icons";

const PrimaryButton = ({
  title,
  style,
  icon,
  hover,
  className,
  textStyle,
  link,
}) => {
  const navigate = useRouter();

  const allHomeWraps = useRef({ wrapper: [], elements: [] });
  const addToRefs = (el) => {
    if (el && !allHomeWraps.current.elements.includes(el)) {
      allHomeWraps.current = {
        ...allHomeWraps.current,
        elements: [...allHomeWraps.current.elements, el],
      };
    }
  };

  return (
    <div
      className={cx(styles.PrimaryButton, className, { [styles.back]: hover })}
      style={style}
      onClick={() => {
        navigate.push(link || "");
      }}
      ref={addToRefs}
    >
      <p className={cx(styles.text, textStyle)}>{title}</p>
      {icon && (
        <div className={styles.icon}>{icon ? icon : <RightArrow />}</div>
      )}
    </div>
  );
};

export default PrimaryButton;
