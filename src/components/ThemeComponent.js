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
import { useAuth } from "@/contexts/auth";
import Link from "next/link";
import ThemeDetails from "../api/themeDetails";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "@/components/Loading";
import StarIcon from '@material-ui/icons/Star';
import { useRouter } from "next/router";
import User from "../api/user";
import Collapse from '@material-ui/core/Collapse';


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
  accordTemaF: {
    float: "top",
    backgroundColor: "#009A7E",
    width: "100%",
    border: "3px solid #000",
  },
  accordTemaTeF: {
    backgroundColor: "#113163",
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
  },
  cont1: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",      
    height: 200,
    marginTop:"-20px",
    marginBottom: 30,
    backgroundColor: "#113163",
    border: "2px solid #009A7E",
    borderRadius: 100,
    textAlign: "center",
    fontFamily: "Rationale",
},
contAlert: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    color: "#fff",
    marginLeft: 150,
    marginRight: 150,
    //height: 50
  },
  textL: {
    justifyContent: "left",
    fontFamily: "Rationale",
  },
}));

export default function PPHeader() {
  const classes = useStyles();
  const { user } = useAuth();
  const [themeDiff, setThemeDiff] = useState([]);
  const [theme, setTheme] = useState([]);
  const [themeDet, setThemeDet] = useState([]);
  const [day, setDay] = useState(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    themeData();
    themeDetail();
    dateN();
  }, []);

  useEffect(() => {
    
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

  async function contentsDetailA(idT) {
    setOpen(true);
    const contentDetail = await ContentDetails.contentsDetailsAll();
    contentTheme(idT, contentDetail);
  }

  async function contentTheme(idT, contentDetail) {
    try {
      const contentTh = await Content.contentTheme(idT);
      getAuthenticatedUser(idT, contentTh, contentDetail);
    } catch(error){

    }
  }

  async function getAuthenticatedUser(idT, content, contentDetail) {
    try {
      const response = await User.getAuthenticatedUser();
      contDetail(idT, content, contentDetail, response.data);
      //return response;
    } catch (error) {
    }
  }

  async function contDetail(idT, content, contentDetail, userI) {
    
      let contents = [];
      var idU;
      if(contentDetail.data.length === 0){
        const contentId = content.data[0].id;   
        const data = {
          content_id: contentId,
          user_id: user.id,
          theme_id: idT,
          date: day,
        };
        contents = await ContentDetails.create(data);
        idU = contentId;
      }else {
        const contentAId = contentDetail.data[0].content_id;
        const dataA = {
          content_id: contentAId,
          user_id: user.id,
          theme_id: idT,
          date: day,
        };
        contents = await ContentDetails.update(contentDetail.data[0].id, dataA); 
        idU = contentAId;
        
      };
      if((userI.experience == 16) || (userI.experience == 32) || (userI.experience == 48) || (userI.experience == 64) || (userI.experience == 80) || (userI.experience == 100)){
        router.push(`/logro/${idT}`);
      } else {
      router.push(`/contenido/${idU}`);
      }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {themeDet[5] &&
      <div>
        {themeDet[themeDet.length-1].theme_advance === 'Terminado' && 
      <Grid item={true}  className={classes.cont1} style={{ marginLeft: '55px', marginRight: '35px' }}>
        <Typography variant="h3" className={classes.textB}>
            FELICIDADES POR COMPLETAR EL CURSO DE FUNDAMENTOS DE CIBERSEGURIDAD
        </Typography>
      </Grid>
      }
      </div>
      }
      
      {themeDiff.map((tema) => (
        <Accordion key={tema} className={classes.accord}>
          <AccordionSummary className={classes.headingT}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h3" className={classes.heading}>
              {tema ? tema : ""}
            </Typography>
          </AccordionSummary>
          {theme.map((temas, index) => (
            <AccordionDetails className={classes.accordC} key={temas.id}>
              {themeDet[index] ? (
              <Grid item={true}  className={classes.grid}>
                {temas.difficulty === tema ? (
                    <Grid item={true} className={classes.grid}> 
                  {themeDet[index].theme_advance === 'Iniciado' ? (
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
                        <Grid item={true} xs={7} className={classes.boxTemaCont}>
                        <Typography variant="h4" className={classes.textB}>
                        {temas.description}
                        </Typography>
                        </Grid>
                        <Grid item={true} xs={5} className={classes.boxTemaTe}>
                          <Button variant="contained" className={classes.btnC} onClick={() => contentsDetailA(temas.id)}>                    
                              <Typography
                                variant="h5"
                                gutterBottom
                                className={classes.textB}
                              >
                                INGRESAR AL TEMA
                              </Typography>
                            
                          </Button>
                        </Grid>
                        <Grid item={true} className={classes.contAlert}>
                        <Collapse in={open}>
                        <Typography
                                variant="h5"
                                gutterBottom
                                className={classes.textL}
                              >
                                CARGANDO, ESPERE UN MOMENTO
                              </Typography> 
                        </Collapse>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                   )  : themeDet[index].theme_advance === 'Bloqueado' ? (
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
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                   ) : themeDet[index].theme_advance === 'Terminado' && (
                    <Accordion className={classes.accordTemaF}>
                    <AccordionSummary className={classes.accordTemaTitulo}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h3" className={classes.textB}>
                        {temas.title} (TERMINADO)
                      </Typography>
                      <StarIcon style={{ fontSize: 60, color: "#E3B102" }}></StarIcon>
                      
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordTemaTeF}>
                      <Grid item={true} xs={7} className={classes.boxTemaCont}>
                      <Typography variant="h4" className={classes.textB}>
                        Ingresa aqui para volver a mirar los contenidos de este tema.
                      </Typography>
                      </Grid>
                      <Grid item={true} xs={5} className={classes.boxTemaTe}>
                      <Link href={`/contenidoT/${temas.id}`}>
                        <Button variant="contained" className={classes.btnC}>
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
                 )}
                  </Grid>
                ): (<div className={classes.spa}></div>)}
                  </Grid>
                ) : (<Loading />)} 
            </AccordionDetails>
            ))}
        </Accordion>
      ))}
    </React.Fragment>
  );
}
