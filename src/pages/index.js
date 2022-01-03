import Header from "@/components/PpHeader";
import Body from "@/components/PpBody";
import Footer from "@/components/PpFooter";
import style from "@/styles/Main.module.css";
import { useAuth } from "@/contexts/auth";
import PerfilHeader from "@/components/PerfilHeader.js";
import PerfilBody from "./perfil/PerfilBody.js";
import PerfilFooter from "../components/Footer.js";

const IndexPage = () => {
  const { user } = useAuth();
  return (
    <div className={style.container}>
      {
      user ?
      <div className={style.container}>
      <PerfilHeader />
      <PerfilBody />
      <PerfilFooter />
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
