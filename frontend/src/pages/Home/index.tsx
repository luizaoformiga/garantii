import React, { useEffect } from "react";
import { Footer } from "../../components";
import { Main, Header } from "./components";
import styles from "./home-styles.module.scss";

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "HOME";
  }, []);

  return (
    <div className={styles.container}>
      <Header title="JUNTE-SE A NÒS" />
      <Main />
      <Footer />
    </div>
  );
};
