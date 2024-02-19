import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>合同会社OBAKE’s Mansion</h1>
        <p className={styles.description}>
        代表社員　リチャードソン幸
        </p>
        <a href="mailto:info@obakesmansion.com" className={styles.contactBtn}>
        info@obakesmansion.com
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
