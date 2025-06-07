import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>We are OBAKE’s Mansion</h1>
        <p className={styles.description}></p>

        {/* 👻 Ghost image now appears ABOVE the contact button */}
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero ghost image"
          className={styles.heroImg}
        />
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
            <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <a href="mailto:info@obakesmansion.com" className={styles.contactBtn}>
          Contact Us!
        </a>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
