import React from "react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

import { generate } from "../atom";
import styles from "./main-styles.module.scss";

export const Main: React.FC = () => {
  const [state, setState] = useRecoilState(generate);
  const history = useHistory();

  const handleSubmit = (): void => {
    history.push("/users");
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          placeholder="Nome"
          value={state.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, name: event?.target.value })
          }
        />
        <p>Email</p>
        <input
          type="text"
          placeholder="Email"
          value={state.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, email: event?.target.value })
          }
        />
        <p>Password</p>
        <input
          type="text"
          placeholder="Senha"
          value={state.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, password: event?.target.value })
          }
        />
        <button>SIGN</button>
      </form>
    </main>
  );
};
