import Header from "@/components/ContenidoHeader.js";
import Footer from "@/components/PpFooter.js";
import Body from "./ContenidoBody.js";
import style from "@/styles/Main.module.css";

const ContenidoPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default ContenidoPage;