import Header from "@/components/PpHeader";
import Body from "@/components/PpBody";
import Footer from "@/components/PpFooter";
import style from "@/styles/Main.module.css";
import { useAuth } from "@/contexts/auth";
import Loading from "@/components/Loading";

const IndexPage = () => {
  const { user } = useAuth();
  return (
    <div className={style.container}>
      {
      user ?
      <div className={style.container}>
        <Loading></Loading>
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
