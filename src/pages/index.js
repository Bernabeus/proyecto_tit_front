import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
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
