import React from "react";
import styles from "./header-styles.module.scss";
import { Logo } from "../../../../components";

type Props = {
  title: string;
  redirect: string;
};

export const Header: React.FC<Props> = ({ title, redirect }) => {
  return (
    <header className={styles.contentWrapper}>
      <div>
        <Logo />
      </div>
      <a href="/usernames">{title}</a>
    </header>
  );
};
