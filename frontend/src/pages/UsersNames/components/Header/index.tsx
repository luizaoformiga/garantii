import React from "react";
import styles from "./header-styles.module.scss";
import { Logo } from "../../../../components";
import { Logout } from "../../../../services/functions";

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  const handleResponse = Logout((window.location.href = "/"));

  return (
    <header className={styles.contentWrapper}>
      <div>
        <Logo />
      </div>
      <a href="/newusers">{title}</a>
    </header>
  );
};
