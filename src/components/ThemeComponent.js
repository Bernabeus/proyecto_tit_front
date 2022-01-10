import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "@fontsource/rationale";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Theme from "../api/theme";
import Content from "../api/content";
import ContentDetails from "../api/contentDetails";
import Button from "@material-ui/core/Button";
import User from "../api/user";
import Link from "next/link";
import ThemeDetails from "../api/themeDetails";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "@/components/Loading";

const useStyles = makeStyles((theme) => ({
  accord: {
    backgroundColor: "#b6b6b6",
    height: "100%",
    marginBottom: 25,
  },
  accordD: {
    height: 50,
  },
  heading: {
    fontFamily: "Rationale",
    color: "#113163",
    textAlign: "center",
  },
  headingT: {
    textAlign: "center",
  },
  text: {
    fontFamily: "Rationale",
    color: "#fff",
  },
  boxTemaCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 140,
    borderBottomRightRadius: 57,
    borderBottomLeftRadius: 57,
  },
  btnC: {
    background: "#000",
    textAlign: "center",
    width: 150,
    fontFamily: "Rationale",
  },
  textB: {
    textAlign: "center",
    fontFamily: "Rationale",
    color: "#fff",
  },
  textBD: {
    fontFamily: "Rationale",
    color: "#fff",
  },
  accordTema: {
    float: "top",
    backgroundColor: "#113163",
    width: "100%",
    border: "3px solid #000",
  },
  accordTemaD: {
    width: "100%",
    border: "2px solid #000",
  },
  accordTemaTitulo: {
    borderBottom: "3px solid #000",
  },
  accordTemaTituloD: {
    backgroundColor: "#000",
  },
  accordTemaTe: {
    backgroundColor: "#009A7E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  grid: {
    width: "100%",
  },
  divO: {
    display: "none",
    border: "3px solid #000",
  }
}));

export default function PPHeader() {
  const classes = useStyles();
  const [ user, setUser ] = useState([]);
  const [themeDiff, setThemeDiff] = useState([]);
  const [theme, setTheme] = useState([]);
  const [themeDet, setThemeDet] = useState([]);
  const [day, setDay] = useState(null);

  useEffect(() => {
    themeDetail();
    themeData();
    dateN();
  }, []);

  useEffect(() => {
    getAuthenticatedUser()
  }, [day]);

  async function themeDetail() {
    try {
      const themeD = await ThemeDetails.themeDetailsAll();
      const arrayTheme = themeD.data.sort(function(a, b){
        if( a.theme_id > b.theme_id){
          return 1;
        }
        if( a.theme_id < b.theme_id){
          return -1;
        }
        return 0
      });
      setThemeDet(arrayTheme);
    } catch(error){
    }
  }

  async function themeData() {
    try {
      const themes = await Theme.themeAll();
      setTheme(themes.data);
      const themeDiff = [];
      for (var i = 0; i <= themes.data.length - 1; i++) {
        themeDiff.push(themes.data[i].difficulty);
      }
      const dataDiff = new Set(themeDiff);
      let resultT = [...dataDiff];
      setThemeDiff(resultT);
      return themes;
    } catch (error) {}
  }

  async function dateN() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "/" + mm + "/" + dd;
    setDay(today);
  }

  async function contentTheme(id) {
    try {
      const contentTh = await Content.contentTheme(id);
      contentsDetailA(id, contentTh.data[0].id);
    } catch(error){

    }
  }

  async function contentsDetailA(id, contentId) {
    const contentDetail = await ContentDetails.contentsDetailsAll();
    contDetail(id, contentId, contentDetail);
  }

  async function contDetail(idT, contentId, contentDetail) {
    try{
      const data = {
        content_id: contentId,
        user_id: user.id,
        theme_id: idT,
        date: day,
      };

      let content = [];
      if(contentDetail.data.length === 0){
        content = await ContentDetails.create(data);
      }else {
        content = await ContentDetails.update(contentDetail.data[0].id, data); 
      };
      
      
    } catch(error){

    }
  }

  async function getAuthenticatedUser() {
    try {
      const response = await User.getAuthenticatedUser();
      setUser(response.data.user);
      return response;
    } catch (error) {
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {themeDiff.map((tema) => (
        <Accordion className={classes.accord}>
          <AccordionSummary className={classes.headingT}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h3" className={classes.heading}>
              {tema ? tema : ""}
            </Typography>
          </AccordionSummary>
          {theme.filter(them => them.difficulty === tema).map((temas, index) => (
            <AccordionDetails className={classes.accordC}>
                <Grid className={classes.grid}>
                  {themeDet[index] ? (
                    <Grid className={classes.grid}> 
                  {themeDet[index].theme_advance === "Iniciado" ? (
                      <Accordion className={classes.accordTema}>
                      <AccordionSummary className={classes.accordTemaTitulo}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography variant="h3" className={classes.textB}>
                          {temas.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.accordTemaTe}>
                        <Grid xs={7} className={classes.boxTemaCont}>
                        <Typography variant="h4" className={classes.textB}>
                        {temas.description}
                        </Typography>
                        </Grid>
                        <Grid xs={5} className={classes.boxTemaTe}>
                        <Link href={`/contenido/${temas.id}`}>
                          <Button variant="contained" className={classes.btnC} onClick={() => contentTheme(temas.id)}>
                            
                              <Typography
                                variant="h5"
                                gutterBottom
                                className={classes.textB}
                              >
                                Ingresar
                              </Typography>
                            
                          </Button>
                          </Link>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                   )  : themeDet[index].theme_advance === "Bloqueado" ? (
                    <Accordion disabled className={classes.accordTemaD}>
                    <AccordionSummary className={classes.accordTemaTituloD}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h3" className={classes.textBD}>
                        Contenido bloqueado
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordTemaTe}>
                    <Typography variant="h3" className={classes.textBD}>
                        Se le dijo que estaria bloqueado
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                   ) : (<div>null
                   </div>)}
                  </Grid>
                ) : (<Loading />)} 
                </Grid>  
            </AccordionDetails>
            ))}
        </Accordion>
      ))}
    </React.Fragment>
  );
}
