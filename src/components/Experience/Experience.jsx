import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>会社概要/Company info</h2>
      <br></br>
      <div className={styles.content}>
        <p className={styles.history}>
          {history.map((historyItem, id) => (
            <p key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}  ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate}  ${historyItem.endDate}`}</p>
                <br></br>
              </div>
              <br />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role1}  ${historyItem.organisation1}`}</h3>
                <p>{`${historyItem.startDate1}  ${historyItem.endDate1}`}</p>
                <br></br>
              </div>

            </p>
          ))}
        </p>
      </div>
    </section>
  );
};
