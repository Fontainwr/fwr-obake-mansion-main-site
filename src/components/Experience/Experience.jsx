import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>会社概要 / Company Info</h2>
      <hr className={styles.divider} />
      <div className={styles.content}>
        {history.map((item, id) => (
          <div key={id} className={styles.historyItem}>
            <img
              src={getImageUrl(item.imageSrc)}
              alt="Company Logo"
              className={styles.logo}
            />
            <div className={styles.historyItemDetails}>
              <div className={styles.block}>
                <h3>会社名 / Company Name</h3>
                <p>{item.companyName}</p>
              </div>

              <div className={styles.block}>
                <h3>所在地 / Address</h3>
                <p>{item.address}</p>
              </div>

              <div className={styles.block}>
                <h3>連絡先 / Contact</h3>
                <p>
                  <a href={`mailto:${item.contact}`}>{item.contact}</a>
                </p>
              </div>

              <div className={styles.block}>
                <h3>代表者名 / Founder</h3>
                <p>{item.founder}</p>
              </div>

              <div className={styles.block}>
                <h3>資本金 / Capital</h3>
                <p>{item.capital}</p>
              </div>

              <div className={styles.block}>
                <h3>主要取引先 / Main Clients</h3>
                <p>{item.clients}</p>
              </div>

              <div className={styles.block}>
                <h3>設立年月 / Date of Incorporation</h3>
                <p>{item.established}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
