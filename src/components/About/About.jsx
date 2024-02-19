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
              <p2>OBAKEs Mansion LLCは、日本を拠点とするダイナミックで革新的な会社で、アニメーション、エフェクト、CM、およびグラフィックスに関する優れたサービスを提供することを使命としています。代表社員であるミユキ・リチャードソンを中心に、私たちはプロジェクトごとに卓越した品質と創造性を提供することを誇りに思っています。

物語を語る情熱と卓越性に対するコミットメントを持ち、OBAKEs Mansion LLCは、クライアントの多様なニーズに対応するためにカスタマイズされた包括的なサービスを提供しています。アニメーションキャラクターを生き生きとさせたい、魅力的なビジュアルエフェクトを作りたい、心を掴むCMを制作したい、または見事なグラフィックスをデザインしたい場合でも、私たちの才能あるチームが、あなたのビジョンを現実に変えるお手伝いをします。

OBAKEs Mansion LLCでは、業界の技術革新の最前線にいることの重要性を理解しています。そのため、私たちは最新のツールと技術に投資し、私たちの仕事が最高水準の品質と革新性を満たすだけでなく、それを上回ることを確認しています。

顧客満足度への献身と卓越性への不変のコミットメントにより、私たちは地元および国際的なクライアントにとって信頼できるパートナーとしての評判を築いてきました。私たちは、クライアントと緊密に協力し、彼らの独自のニーズと目標が正確かつ創造的に満たされることを誇りに思っています。

OBAKEs Mansion LLCのアニメーション、エフェクト、CM、およびグラフィックスに関するニーズについてご検討いただき、誠にありがとうございます。私たちは、最も魅力的で記憶に残る方法で、あなたのアイデアを実現するための機会を楽しみにしています。
</p2>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
