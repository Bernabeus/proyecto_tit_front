import Header from "@/components/PpHeader";
import Body from "@/components/PpBody";
import Footer from "@/components/PpFooter";
import style from "@/styles/Main.module.css";

const IndexPage = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
};
export default IndexPage;
