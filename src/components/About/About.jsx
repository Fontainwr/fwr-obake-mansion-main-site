import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About </h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png" // Absolute path from public/
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>合同会社OBAKEs Mansion 代表挨拶</h3>
              <hr />
              <p>
                合同会社OBAKE's Mansionは、クリエイティブな魔法を紡ぐ、
                ちょっと不思議だけど怖くないオバケ屋敷のような会社です。
                <br />
                ・・・（略）・・・
                合同会社OBAKE's Mansion 代表社員 リチャードソン幸
              </p>
              <h3>About Us</h3>
              <hr />
              <p>
                Founder - Miyuki Richardson
                <br />
                Godo Kaisha OBAKE's Mansion is a company that weaves creative magic.
                <br />
                ・・・（略）・・・
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
