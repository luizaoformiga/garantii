import React, { useEffect } from "react";
import { Footer } from "../../components";
import { Header, Main } from "./components";

export const UsersNames: React.FC = () => {
  useEffect(() => {
    document.title = "LISTAGEM";
  }, []);

  return (
    <div>
      <Header title="SAIR" />
      <Main />
      <Footer />
    </div>
  );
};
