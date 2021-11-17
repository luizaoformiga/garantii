import React from "react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

import { generate } from "../atom";
import styles from "./main-styles.module.scss";
import { ErrorMessage } from "../../../../components";
import { fetchUser } from "../../../../services/requests";

export const Main: React.FC = () => {
  const [state, setState] = useRecoilState(generate);
  const history = useHistory();

  const handleSubmit = () => {
    const { name, email, password } = state;

    if (!email || !password) {
      setState({ ...state, error: true });
      return;
    } else {
      setState({ ...state, error: false });
      fetchUser(name, email);
      ///history.push("/users");
    }
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        {state.error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
        <p>Email</p>
        <input
          type="text"
          placeholder="Email"
          value={state.email}
          onChange={(event) =>
            setState({ ...state, email: event.target.value })
          }
        />
        <p>Senha</p>
        <input
          type="text"
          placeholder="Password"
          value={state.password}
          onChange={(event) =>
            setState({ ...state, password: event.target.value })
          }
        />
        <button>LOGIN</button>
      </form>
    </main>
  );
};
