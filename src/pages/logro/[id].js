import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "@fontsource/rationale";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import Image from "next/image";
import defecto from "../../../public/images/defecto.png";
import izq from "../../../public/images/Izq.gif";
import der from "../../../public/images/Der.gif";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Header from "@/components/LogroHeader.js";
import style from "@/styles/Main.module.css";
import Achievements from "src/api/achievement";
import ThemeDetails from "src/api/themeDetails";
import Collapse from '@material-ui/core/Collapse';
import Locked from "@/components/Locked";
import User from "../../api/user";
import ContentDetails from "../../api/contentDetails";


const useStyles = makeStyles(() => ({
  containerC: {
    height: "100%"
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRight: "1px solid #fff",
    borderLeft: "1px solid #fff",
    display: "flex",
    height: "100%"
  },
  cont1: {
    width: "100%",
    backgroundColor: "#B7B1B1",
    
    alignContent: "center",
    margin: "0 auto",
  },
  text: {
    color: "#000",
    float: "center",
    textAlign: "center",
    fontFamily: "Rationale",
  },
  textL: {
    fontFamily: "Rationale",
  },
  medal: {
    display: "flex",
    justifyContent: "center",
  },
  btnS: {
    marginTop: 45,
    background: "#009A7E",
    textAlign: "center",
    fontFamily: "Rationale",
  },
  box1: {
    background: "#B7B1B1",
  },
  list: {
    marginTop: "-20px",
    //para centrar componentes
    display: "flex",
    justifyContent: "center",
  },
  contButton: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
      height: "100%",
  },
  cont2: {
    height: "100%",
  },
  contAlert: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000",
    color: "#fff",
    marginLeft: 150,
    marginRight: 150,
    //height: 50
  }
}));

const LogroPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [achievement, setAchievement] = useState([]);
  const [themeD, setThemeD] = useState([]);
  const [achievementI, setAchievementI] = useState([]);
  const [user, setUser] = useState([]);
  const [achiImage, setAchiImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [lockedAchievement, setLockedAchievement] = useState(false);
  

  useEffect(() => {
    getAuthenticatedUser();
  }, [id]);

  async function getAuthenticatedUser() {
    try {
      const response = await User.getAuthenticatedUser();
      themeDetailA(response.data);
      setUser(response.data);
      return response;
    } catch (error) {
      console.log();
    }
  }

    async function themeDetailA(user) {
      try {
        const themeS = await ThemeDetails.themeDetailsAll();
        const arrayTheme = themeS.data.sort(function(a, b){
          if( a.theme_id > b.theme_id){
            return 1;
          }
          if( a.theme_id < b.theme_id){
            return -1;
          }
          return 0
        });

        if(user.experience == 16 && id == 1){
          setLockedAchievement(true);
        }
        else if(user.experience == 32 && id == 2){
          setLockedAchievement(true);
        }
        else if(user.experience == 48 && id == 3){
          setLockedAchievement(true);
        }
        else if(user.experience == 64 && id == 4){
          setLockedAchievement(true);
        }
        else if(user.experience == 80 && id == 5){
          setLockedAchievement(true);
        }
        else if(user.experience == 100 && id == 6){
          setLockedAchievement(true);
        }
        AchievementInf();
        setThemeD(arrayTheme);
      }catch(error){
        console.log();
      }
    }

    //Recogiendo la informacion del logro correspondiente
    async function AchievementInf() {
        try{
            const achievementI = await Achievements.achievement(id);
            let aImage = achievementI.data.image;
            setAchiImage(aImage);
            setAchievement(achievementI.data);
            achievementItems(achievementI.data);
        }catch(error){
          console.log();
        }
    }
    //Creando un arreglo con los items de logros
    function achievementItems(logro) {
      let arrayAchievementI = [];
      arrayAchievementI.push(logro.item_1);
      arrayAchievementI.push(logro.item_2);
      arrayAchievementI.push(logro.item_3);
      arrayAchievementI.push(logro.item_4);
      setAchievementI(arrayAchievementI);
  }

  //Ordenando los datos de la tabla detailstheme y actualizando la informacion del siguiente tema, habilitandolo
  async function ThemeSearch() {
    try{
        var idA = id;
        var idAs = idA;
        if(idA < 6 ){
          setOpen(true);
          const themeIdA = themeD[--idA].id;
          const themeIdS = themeD[id].id;
          const themeAdvanceA = themeD[idAs].theme_advance;
          ThemeComplete(themeAdvanceA, themeIdA, themeIdS);
        }else {
          const themeIdA = themeD[5].id;
          const themeAdvanceA = themeD[5].theme_advance;
          ThemeCompleteFinal(themeAdvanceA, themeIdA);
        }
    }catch(error){
      console.log();
    }
  }

  async function ThemeCompleteFinal(themeAdvanceA, themeIdA) {
    const dataA = {
      theme_id: id,
      theme_advance: 'Terminado', 
    };
    const themeA = await ThemeDetails.update(themeIdA, dataA);
    router.push("/perfil");
    return themeA;
  }

    async function ThemeComplete(themeAdvanceA, themeIdA, themeIdS) {
      var idS = id;
      const dataA = {
        theme_id: id,
        theme_advance: 'Terminado', 
      };
      const dataS = {
        theme_id: ++idS,
        theme_advance: 'Iniciado', 
      };
      
      const themeA = await ThemeDetails.update(themeIdA, dataA);

      themeNex(themeIdS, dataS);
      return themeA;
    }

    async function themeNex(themeIdS, dataS) {
      const themeS = await ThemeDetails.update(themeIdS, dataS);
      contentsDetailA();
      router.push("/perfil");
      return themeS;
    }

    //actualizar posicion actual del tema al terminarlo
    async function contentsDetailA() {
      const contentDetail = await ContentDetails.contentsDetailsAll();
      contentNow(contentDetail.data[0]);
  }

    

  async function contentNow(Content) {     
      var idC = Content.content_id;
      idC = ++idC;
      var idT = id;
      idT = ++idT;
      if(idT<=6){
          const data = {
              content_id: idC,
              theme_id: idT,
            };  
         const content = await ContentDetails.update(Content.id, data); 
        ExpUser();
        
      return content;
      } 
  }

  async function ExpUser(){
        const exp = user.experience + (2);
        const userId = user.id;
        const data = {
            experience: exp
        };
        const userA = await User.update(userId, data);
        return userA;
    }


  return (
    <React.Fragment>
      <div className={style.container}>
    <Header />
    
      <Container className={classes.containerC}>
        <CssBaseline />
        <Grid item={true} direction="row"
          
           className={classes.container}>

   
          <Grid item={true} xs container className={classes.cont2}>
            <Image
              src={izq}
              height={1099}
              width={205}
              className={classes.img}
            />
          </Grid>

          {lockedAchievement == true ? 
          <Grid item={true} xs={8} container className={classes.cont1}>
          <Grid item={true} xs={12}>
            <Typography variant="h3" gutterBottom className={classes.text}>
            {achievement && achievement.title}
            </Typography>
          </Grid>
          <Grid item={true} xs={12} className={classes.medal}>
            <Image src={achiImage ? achiImage: defecto} height={350} width={300} />
          </Grid>
          <Grid item={true} xs={12} className={classes.contText}>
            <Typography variant="h3" gutterBottom className={classes.text}>
              Ahora sabes:
            </Typography>
            <Grid item={true} className={classes.list}>
              <List className={classes.text}>
              {achievementI.map((logro, index) => (
                <ListItem key={index}> 
                <ListItemIcon>
                    <Brightness1Icon style={{ fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText>
                  <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.textL}
                  >
                    {logro}
                  </Typography>
                  </ListItemText>
                </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid item={true} xs={12} className={classes.contButton}>    
            <Button variant="contained" className={classes.btnS} onClick={() =>  ThemeSearch() }>          
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.textL}
                >
                  Presione aqui para regresar a los temas
                </Typography>          
            </Button>    
          </Grid>
          <Grid item={true} xs={12}>
          <Grid item={true} className={classes.contAlert}>
          <Collapse in={open}>
          <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.textL}
                >
                  Desbloqueando nuevo tema, espere un momento
                </Typography> 
          </Collapse>
          </Grid>
        </Grid>
        </Grid>: 
        <Locked />
        }

          <Grid item={true} xs container className={classes.cont2} >
            <Image 
            className={classes.img}
            src={der} 
            height={1099} 
            width={205} 
            />
          </Grid>
          
        </Grid>
      </Container>
      <Header />
      </div>
    </React.Fragment>
  );
};

export default LogroPage;


/*

<Image src={achiImage ? achiImage: defecto} height={350} width={300} />*/