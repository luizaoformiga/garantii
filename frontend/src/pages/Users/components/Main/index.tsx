import React from "react";
import styles from "./main-styles.module.scss";

type Props = {
  name: string;
  email: string;
  password: string;
};

export const Main: React.FC<Props> = ({ name, email, password }) => {
  return (
    <main className={styles.container}>
      <div>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
      </div>
    </main>
  );
};
