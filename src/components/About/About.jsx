import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* Image from public folder */}
        <img
          src="/assets/about/aboutImage.png"
          alt="Founder working on a laptop"
          className={styles.aboutImage}
        />

        <div className={styles.aboutText}>
          {/* Japanese Section */}
          <h3>合同会社OBAKEs Mansion 代表挨拶</h3>
          <hr />
          <p>
            合同会社OBAKE's Mansionは、クリエイティブな魔法を紡ぐ、少し不思議で怖くないオバケ屋敷のような会社です。
            <br />
            アメリカ留学から18年間の在米経験を経て、10年以上のアニメーションやゲーム業界でのキャリアを築いた後、日本に帰国した
            リチャードソン幸によって、令和5年に設立されました。
          </p>
          <p>
            弊社では、ゲーム開発とアニメーション制作を主軸にしつつ、オリジナルグッズの制作・販売、魅力的な音声コンテンツや動画制作、
            ワークショップの開催など、クリエイティブな取り組みを積極的に行っています。
            <br />
            不思議でワクワクする世界を楽しく広めることが弊社のミッションです。
          </p>
          <p>
            生まれたばかりのOBAKE's Mansionをどうぞよろしくお願いいたします。
          </p>
          <p>
            <strong>合同会社OBAKE's Mansion<br />代表社員　リチャードソン幸</strong>
          </p>

          {/* English Section */}
          <h3>About Us</h3>
          <hr />
          <p>
            <strong>Founder:</strong> Miyuki Richardson
          </p>
          <p>
            Godo Kaisha OBAKE's Mansion is a creative company that weaves magic into every project.
            Founded in 2023 by Miyuki Richardson, who returned to Japan after over 18 years in the United States
            and more than a decade in the animation and gaming industries, our company brings a unique blend of experience and creativity.
          </p>
          <p>
            While our primary focus is game development and animation production, we also create original merchandise,
            produce engaging audiovisual content, and run workshops that spark creativity. At OBAKE's Mansion, ideas come to life
            in a space full of wonder and excitement. 
          </p>
          <p>
            We invite you to open our doors, explore our world, and experience the creativity and joy we bring to every project.
          </p>
        </div>
      </div>
    </section>
  );
};
