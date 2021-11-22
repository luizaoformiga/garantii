import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../components";
import { Main, Header } from "./components";
import styles from "./new-user-styles.module.scss";

type Props = {
  id: string;
  name: string;
};

export const NewUsers: React.FC = () => {
  const { id, name } = useParams<Props>();
  
  useEffect(() => {
    document.title = "CADASTRO";
  }, []);

  return (
    <div className={styles.container}>
      <Header title="NEW USER" />
      <Main name={name} children={id ? Number.parseInt(id) : null} />
      <Footer />
    </div>
  );
};
