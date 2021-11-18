import React from "react";
import styles from "./main-styles.module.scss";
import data from "../../../../services/users.json";

type Props = {
  name: string;
  email: string;
};

export const Main: React.FC<Props> = ({ name, email }) => {
  return (
    <main className={styles.container}>
      <h1>Menu</h1>
      {data.users.map((user, index) => (
        <div key={index}>
          <h2>Seja bem-vindo, {user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
};
