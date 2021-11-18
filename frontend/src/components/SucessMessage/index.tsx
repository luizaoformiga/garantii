import React from "react";
import styles from "./sucess-styles.module.scss";

export const SucessMessage: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <p>Cadastrado com sucesso!</p>
    </div>
  );
};
