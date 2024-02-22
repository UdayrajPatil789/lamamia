import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/">
      <button className={styles.container}>See Our Works</button>
    </Link>
  );
};

export default Button;