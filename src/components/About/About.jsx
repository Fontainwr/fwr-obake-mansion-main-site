import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>合同会社OBAKEs Mansion
              代表社員 リチャードソン幸</h3>
              <hr></hr>
              <br></br>
              <p2>OBAKEs Mansion LLCは、日本を拠点とするダイナミックで革新的な会社で、アニメーション、エフェクト、CM、およびグラフィックスに関する優れたサービスを提供することを使命としています。代表社員であるミユキ・リチャードソンを中心に、私たちはプロジェクトごとに卓越した品質と創造性を提供することを誇りに思っています</p2>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h3>Founder: Miyuki Maruyama Richardson</h3>
              <hr></hr>
              <br></br>
              <p2>Miyuki Maruyama Richardson, known affectionately as "Maruchan," is a seasoned Character Animator with a diverse background in both traditional and digital animation. With a keen eye for detail and a passion for bringing characters to life, Maruchan has contributed to a range of projects spanning games, web shorts, and conference productions.</p2>
            
            
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
