import React from "react";
import styles from "./button-styles.module.scss";

type Props = {
  title: string;
};

export const Button: React.FC<Props> = ({ title }) => {
  return <button className={styles.contentWrapper}>{title}</button>;
};
