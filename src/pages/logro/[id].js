import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "@fontsource/rationale";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import Image from "next/image";
import medalla from "../../../public/images/medalla.png";
import izq from "../../../public/images/izq.gif";
import der from "../../../public/images/der.gif";
import Link from "next/link";
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

const useStyles = makeStyles((theme) => ({
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
    alignItems: "center",
    alignContent: "center",
    margin: "0 auto",
  },
  text: {
    float: "center",
    textAlign: "center",
    fontFamily: "Rationale",
  },
  textL: {
    justifyContent: "left",
    fontFamily: "Rationale",
  },
  medal: {
    display: "flex",
    alignItems: "center",
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
  contText: {
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    marginTop: "-20px",
    //para centrar componentes
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
      height: "100%",
  },
  cont2: {
    height: "100%",
  }
}));

const LogroPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [achievement, setAchievement] = useState([]);
  const [achievementI, setAchievementI] = useState([]);

  useEffect(() => {
    AchievementInf()
  }, [id]);


    async function AchievementInf() {
        try{
            const achievementI = await Achievements.achievement(id);
            setAchievement(achievementI.data);
            achievementItems(achievementI.data);
        }catch(error){
        }
    }

    function achievementItems(logro) {
      let arrayAchievementI = [];
      arrayAchievementI.push(logro.item_1);
      arrayAchievementI.push(logro.item_2);
      arrayAchievementI.push(logro.item_3);
      arrayAchievementI.push(logro.item_4);
      setAchievementI(arrayAchievementI);
  }

  async function ThemeSearch() {
    try{
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
        var idA = id;
        var idAs = idA;
        const themeIdA = arrayTheme[--idA].id;
        const themeIdS = arrayTheme[id].id;
        const themeAdvanceA = arrayTheme[idAs].theme_advance;
        console.log("temas", arrayTheme);
        ThemeComplete(themeAdvanceA, themeIdA, themeIdS);
    }catch(error){
    }
  }

    function ThemeComplete(themeAdvanceA, themeIdA, themeIdS) {
      var idS = id;
      const dataA = {
        theme_id: id,
        theme_advance: 'Terminado', 
      };
      const dataS = {
        theme_id: ++idS,
        theme_advance: 'Iniciado', 
      };
      if(themeAdvanceA == 'Iniciado'){
        const themeA =  ThemeDetails.update(themeIdA, dataA);
        const themeS =  ThemeDetails.update(themeIdS, dataS);
      }
    }


  return (
    <React.Fragment>
      <div className={style.container}>
    <Header />
      <Container className={classes.containerC}>
        <CssBaseline />
        <Grid spacing={0} direction="row"
  justifyContent="center"
  alignItems="stretch" className={classes.container}>
          <Grid xs container className={classes.cont2}>
            <Image
              src={izq}
              height={1099}
              width={205}
              className={classes.img}
            />
          </Grid>
          <Grid xs={8} container spacing={0} className={classes.cont1}>
            <Grid xs={12}>
              <Typography variant="h3" gutterBottom className={classes.text}>
              {achievement && achievement.title}
              </Typography>
            </Grid>
            <Grid xs={12} className={classes.medal}>
              <Image src={medalla} height={350} width={300} />
            </Grid>
            <Grid xs={12} className={classes.contText}>
              <Typography variant="h3" gutterBottom className={classes.text}>
                Ahora sabes:
              </Typography>
              <Grid className={classes.list}>
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
            <Grid xs={12} className={classes.contButton}>
            <Link href="/perfil">
              <Button variant="contained" className={classes.btnS} onClick={() =>  ThemeSearch() }>          
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.textL}
                  >
                    Regresar al curso
                  </Typography>          
              </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid xs container className={classes.cont2}>
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
