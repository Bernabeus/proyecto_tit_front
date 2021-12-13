import Header from "@/components/PerfilHeader.js";
import Footer from "@/components/PerfilFooter.js";
import Body from "./PerfilBody.js";
import style from "@/styles/Main.module.css";

const PerfilPage = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default PerfilPage;