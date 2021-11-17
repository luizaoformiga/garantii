import React from "react";
import styles from "./error-message-styles.module.scss";

export const ErrorMessage: React.FC = ({ children }) => {
  return <div className={styles.contentWrapper}>{children}</div>;
};
