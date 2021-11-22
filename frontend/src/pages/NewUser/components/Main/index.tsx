import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AxiosResponse } from "axios";

import styles from "./main-styles.module.scss";
import { Button } from "../../../../components";
import { api } from "../../../../services/axios";
import { ServerError } from "../../../../services/error";

type Props = {
  id?: string;
  name?: string;
  email?: string
};

export const Main: React.FC<Props> = ({ children }) => {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { name, email, password } = state;

    const values = {
      name: name,
      email: email,
      password: password,
    };

    if (!name || !email || !password) {
      alert("preencha os dados");
    }

    api
      .post("/cadastrar", values)
      .then((response: AxiosResponse<Props>) =>
        history.push(`/listar/${response.data.id}`)
      )
      .catch(() => new ServerError("Not Found"));
  };

  return (
    <main className={styles.container}>
      <h2>Cadastre-se conosco!</h2>

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, name: event.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, password: event.target.value })
          }
        />
        <Button title="Entrar" />
      </form>
    </main>
  );
};
