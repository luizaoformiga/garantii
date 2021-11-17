import React, { useEffect } from "react";
import { Footer } from "../../components";
import { Main, Header } from "./components";
import styles from "./new-user-styles.module.scss";

export const NewUsers: React.FC = () => {
  useEffect(() => {
    document.title = "CADASTRO";
  }, []);

  return (
    <div className={styles.container}>
      <Header title="NEW USER" />
      <Main />
      <Footer />
    </div>
  );
};
