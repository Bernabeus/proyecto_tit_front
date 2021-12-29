import Header from "@/components/LogroHeader.js";
import Body from "./LogroBody.js";
import style from "@/styles/Main.module.css";

const LogroPage = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Body></Body>
      <Header></Header>
    </div>
  );
};

export default LogroPage;