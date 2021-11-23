import React, { useEffect, useState } from "react";
import { api } from "../../../../services/axios";
import styles from "./main-styles.module.scss";

type Props = {
  name: string;
  email: string;
  password: string;
};

export const Main: React.FC = () => {
  const [state, setState] = useState<Array<any>>([]);

  useEffect(() => {
    (async function getdata(): Promise<void> {
      const response = await api
        .get("/listar")
        .then((res) => res.data)
        .catch((err: Error) => err);

      return setState(prevState => prevState = response);
    })()
  }, []);

  return (
    <main className={styles.container}>
      <h2>USUÁRIOS ATÉ O MOMENTO</h2>
      <div>
        {state?.map((user: Props, index) => (
          <div key={index} className={styles.card}>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
