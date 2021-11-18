import React from "react";
import styles from "./footer-styles.module.scss";
import rodape from "../../assets/garantti-logo-rodape.png";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.contentWrapper}>
      <div>
        @desenvolvido por Luiz Lima
      </div>
      <div>
        <img src={rodape} alt="rodapé" />
      </div>
    </footer>
  );
};
