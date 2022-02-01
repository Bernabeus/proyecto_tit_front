import Header from "@/components/PerfilHeader.js";
import Footer from "@/components/PerfilFooter.js";
import Body from "./PerfilBody.js";
import style from "@/styles/Main.module.css";
import React from "react";

const PerfilPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default PerfilPage;