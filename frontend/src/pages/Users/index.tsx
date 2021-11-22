import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AxiosResponse } from "axios";

import { Footer } from "../../components";
import { api } from "../../services/axios";
import { Header, Main } from "./components";

import styles from "./user-styles.module.scss";

type Props = {
  id: number;
  name: string;
  email: string;
};

type RouteProps = {
  id: string;
};

export const Users: React.FC = () => {
  const { id } = useParams<any>();
  const [user, setUser] = useState<Props>({} as Props);

  useEffect(() => {
    async function getdata() {
      const response: any = await api.get(`/listar/${id}`);
      
      /**
        const allUsers: Props[] = response.data as Props[];
        const [userFiltered] = allUsers.filter((user) => user.id === Number(id));
        setUser(userFiltered); 
      */

      setUser(response);
      console.log("user", id);
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
      />
      <Footer />
    </div>
  );
};
