import Header from "@/components/LogroHeader.js";
import Footer from "@/components/PpFooter.js";
import Body from "./LogroBody.js";
import style from "@/styles/Main.module.css";

const LogroPage = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default LogroPage;