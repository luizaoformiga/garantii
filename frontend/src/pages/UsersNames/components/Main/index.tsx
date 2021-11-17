import React from "react";
import styles from "./main-styles.module.scss";
import data from "../../../../services/users.json";

type Props = {
  name: string;
  email: string;
  password: string;
};

export const Main: React.FC<Props> = ({ name, email, password }) => {
  return (
    <main className={styles.container}>
      <h2>USUÁRIOS ATÉ O MOMENTO</h2>
      <div>
        {data.users.map((user, index) => (
          <div key={index}>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
