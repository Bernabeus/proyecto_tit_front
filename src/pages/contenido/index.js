import Header from "@/components/ContenidoHeader.js";
import Footer from "@/components/PerfilFooter.js";
import Body from "./ContenidoBody.js";
import style from "@/styles/Main.module.css";

const ContenidoPage = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default ContenidoPage;