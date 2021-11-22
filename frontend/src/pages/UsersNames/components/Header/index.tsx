import React from "react";
import styles from "./header-styles.module.scss";
import { Logo } from "../../../../components";

type Props = {
  title?: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className={styles.contentWrapper}>
      <div>
        <Logo />
      </div>
      <a href="/">{title}</a>
    </header>
  );
};
