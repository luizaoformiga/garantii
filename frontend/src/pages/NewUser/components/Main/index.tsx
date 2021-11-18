import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import styles from "./main-styles.module.scss";
import { Button } from "../../../../components";

type Props = {
  name: string;
  email: string;
  password: string;
};

export const Main: React.FC = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "No Mínimo dois caracteres")
      .required("Nome obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "senha de pelo menos 6 digitos")
      .required("Senha obrigatória"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const [, setResult] = useState("");

  const onSubmit = (user: Props): void => {
    if (user) {
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
