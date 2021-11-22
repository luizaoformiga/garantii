import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AxiosResponse } from "axios";

import { Footer } from "../../components";
import { api } from "../../services/axios";
import { Header, Main } from "./components";

import styles from "./user-styles.module.scss";

type Props = {
  id: string;
  name: string;
  email: string;
};

export const Users: React.FC = () => {
  const { id } = useParams<Props>();
  const [user, setUser] = useState<Props>({} as Props);

  useEffect(() => {
    async function getdata() {
      const response: AxiosResponse<any, any> = await api.get("/posts");
      const allUsers: Props[] = response.data as Props[];
      const [userFiltered] = allUsers.filter((user) =>
        user.id === id ? Number.parseInt(id) : null
      );
      setUser(userFiltered);
    }

    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = "MENU";
  }, []);

  return (
    <div className={styles.container}>
      <Header title="Mostrar outros usuários" redirect="TODOS OS USUÀRIOS" />
      <Main
        name={user?.name}
        email={user?.email}
        children={id ? Number.parseInt(id) : null}
      />
      <Footer />
    </div>
  );
};
