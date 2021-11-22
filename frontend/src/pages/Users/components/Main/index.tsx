import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";

import styles from "./main-styles.module.scss";
import { api } from "../../../../services/axios";
import { ServerError } from "../../../../services/error";

type Props = {
  id?: string;
  name: string;
  email: string;
};

export const Main: React.FC<Props> = (props) => {
  const [state, setState] = useState<Array<string>>([])
  const { name, email } = useParams<Props>();

  useEffect(() => {
    async function getdata(): Promise<void> {
      const response = await api
        .get("/posts")
        .then((res: AxiosResponse) => res.data)
        .catch(() => new ServerError("Not found"));
      setState(response);
    }

    getdata();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Menu</h1>
      </div>
      <div className={styles.card}>
        <h2>Seja bem-vindo, {props.name}</h2>
        <p>{props.email}</p>
      </div>
    </main>
  );
};
