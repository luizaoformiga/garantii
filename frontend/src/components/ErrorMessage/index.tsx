import React from "react";
import styles from "./error-message-styles.module.scss";

export const ErrorMessage: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <p>Por favor, preencha os dados</p>
    </div>
  );
};
