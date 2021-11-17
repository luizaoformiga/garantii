import React, { useEffect } from "react";
import { Footer } from "../../components";
import { Header, Main } from "./components";

import styles from "./user-styles.module.scss";

export const Users: React.FC = () => {
  useEffect(() => {
    document.title = "MENU";
  }, []);

  return (
    <div className={styles.container}>
      <Header title="Mostrar outros usuários" redirect="TODOS OS USUÀRIOS" />
      <Main
        name="Luiz Lima"
        email="email@example.com"
        password="defpanmaster"
      />
      <Footer />
    </div>
  );
};
