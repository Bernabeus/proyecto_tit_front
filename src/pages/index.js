import React from "react";
import Header from "@/components/PpHeader";
import Body from "@/components/PpBody";
import Footer from "@/components/PerfilFooter";
import LogroHeader from "@/components/LogroHeader";
import Locked from "@/components/Locked";
import style from "@/styles/Main.module.css";
import { useAuth } from "@/contexts/auth";

const IndexPage = () => {
  const { user } = useAuth();
  return (
    <div className={style.container}>
      {
      user ?
      <div className={style.container}>
        <LogroHeader />
        <Locked />
        <Footer />
        </div>
      : 
      <div className={style.container}>
      <Header />
      <Body />
      <Footer />
    </div> }
    </div>
  )
};

export default IndexPage;
