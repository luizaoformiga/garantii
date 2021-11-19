import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import styles from "./main-styles.module.scss";
import { Button } from "../../../../components";
import { schema } from "../../../../validations/new-user";
import { RepositoriesTypes, Repository } from "../../../../store/ducks/repositories/types";
import store from "../../../../store";

type Props = {
  name: string;
  email: string;
  password: string;
};

export const Main: React.FC = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const [, setResult] = useState("");

  const handleAddUser = (user?: Repository[]): void => {
    store.dispatch({ type: RepositoriesTypes.USER_ADD, payload: [user] });
    console.log("add", store.getState());
  };

  const onSubmit = (user: Props): void => {
    if (user) {
      handleAddUser()
      setResult(JSON.stringify(user));
      console.log(user);
      history.push("/");
    }
  };

  return (
    <main className={styles.container}>
      <h2>Cadastre-se conosco!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Nome" />
        {formState.errors.name?.message}
        <input type="email" {...register("email")} placeholder="Email" />
        {formState.errors.email?.message}
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        {formState.errors.password?.message}
        <Button title="Entrar" />
      </form>
    </main>
  );
};
