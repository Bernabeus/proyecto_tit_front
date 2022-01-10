import Header from "@/components/PerfilHeader.js";
import Footer from "@/components/PpFooter.js";
import Body from "./PerfilBody.js";
import style from "@/styles/Main.module.css";
import withAuth from "@/hocs/withAuth";

const PerfilPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default withAuth(PerfilPage);