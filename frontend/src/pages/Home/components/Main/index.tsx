import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import styles from "./main-styles.module.scss";
import { Button } from "../../../../components";
import { schema } from "../../../../validations/login";
import { Repository } from "../../../../store/ducks/repositories/types";

interface StateProps {
  repository?: Repository;
}

export const Main: React.FC<StateProps> = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setResult] = useState("");
  const history = useHistory();

  const onSubmit = (user: StateProps): void => {
    setResult(JSON.stringify(user));
    history.push("/users/:id");
    console.log(user);
  };

  return (
    <main className={styles.container}>
      <h2>Já tem conta? conecte-se aqui</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
