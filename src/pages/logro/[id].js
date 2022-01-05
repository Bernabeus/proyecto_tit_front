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

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid #000000",
    display: "flex",
    marginBottom: "-7px",
  },
  cont1: {
    width: "100%",
    height: 1100,
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
    float: "center",
    fontFamily: "Rationale",
  },
  textB: {
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
  }
}));

const LogroPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [achievement, setAchievement] = useState([]);

  useEffect(() => {
    AchievementInf()
  }, [id]);


    async function AchievementInf() {
        try{
            const achievementI = await Achievements.achievement(id);
            setAchievement(achievementI.data);
        }catch(error){
        }
    }


  return (
    <React.Fragment>
    <Header />
      <Container className={style.container}>
        <CssBaseline />
        <Grid spacing={0} className={classes.container}>
          <Grid xs={2} className={classes.cont2}>
            <Image
              src={izq}
              height={1099}
              width={205}
              className={classes.imgI}
            />
          </Grid>
          <Grid className={classes.box1}></Grid>
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
                  <ListItem > 
                    <ListItemIcon>
                      <Brightness1Icon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText>
                    <Typography variant="h5" gutterBottom className={classes.textL}>
                    {achievement && achievement.item_1}
                    </Typography>     
                    </ListItemText>
                  </ListItem>
                  <ListItem > 
                    <ListItemIcon>
                      <Brightness1Icon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText>
                    <Typography variant="h5" gutterBottom className={classes.textL}>
                    {achievement && achievement.item_2}
                    </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem > 
                    <ListItemIcon>
                      <Brightness1Icon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText>
                    <Typography variant="h5" gutterBottom className={classes.textL}>
                    {achievement && achievement.item_3}
                    </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem > 
                    <ListItemIcon>
                      <Brightness1Icon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText>
                    <Typography variant="h5" gutterBottom className={classes.textL}>
                    {achievement && achievement.item_4}
                    </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid xs={12} className={classes.contButton}>
              <Button variant="contained" className={classes.btnS}>
                <Link href="/">
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.textB}
                  >
                    Regresar al curso
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
          <Grid xs={2} className={classes.cont3}>
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
    </React.Fragment>
  );
};

export default LogroPage;
