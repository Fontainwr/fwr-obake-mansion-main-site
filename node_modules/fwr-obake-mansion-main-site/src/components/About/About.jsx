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
              代表挨拶</h3>
              <hr></hr>
              <br></br>
              <p2>合同会社OBAKE's Mansionは、クリエイティブな魔法を紡ぐ、ちょっと不思議だけど怖くないオバケ屋敷のような会社です。アメリカ留学から１８年間の在米経験を経て、１０年以上のアニメーションやゲーム業界でのキャリアを築いた後日本に帰国したリチャードソン幸によって、令和５年に設立されました。
弊社では、ゲーム開発とアニメーション制作を主軸にしつつ、オリジナルグッズの製作や販売、魅力的な音声コンテンツや動画制作、ワークショップの開催など、クリエイティブなことに積極的に取り組み、不思議でワクワクする世界を楽しく広めることが弊社のミッションです。不思議でヘンテコなオバケ屋敷のような弊社の事業は、まるで開けたらどんなオバケが出てくるかわからないマンションの一室のようです。生まれたばかりのOBAKE's Mansionをどうぞよろしくお願いいたします。
<br></br>
<br></br>
合同会社OBAKE's Mansion
代表社員　リチャードソン幸
</p2>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h3>About Us</h3>
              <hr></hr>
              <br></br>
              Founder- Miyuki Richardson 
              <br></br>
              <br></br>
              <p2>Godo Kaisha OBAKE's Mansion is a company that weaves creative magic. Founded in 2023 by Miyuki Richardson, who returned to Japan after over 18 years in the United States, building a career of over a decade in the animation and gaming industries. While our primary endeavors lie in game development and animation production, our repertoire extends far beyond. Crafting original merchandise, delivering captivating audiovisual content, and offering creative workshops are all integral parts of our expertise. 
At OBAKE's Mansion, creative ideas come to life, and imaginations take flight in our unique space. Open our doors, and embark on a new adventure. We're ready to captivate your heart and deliver experiences filled with wonder and delight.
</p2>
            
            
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
