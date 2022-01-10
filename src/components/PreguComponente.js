import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LensIcon from '@material-ui/icons/Lens';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import "@fontsource/rationale";
import style from "@/styles/Main.module.css";
import { useRouter } from "next/router";
import Content from "../api/content";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useAuth } from "@/contexts/auth";
import AchievementDetails from "src/api/achievementDetails";

const useStyles = makeStyles((theme) => ({
    containerPreg: {
        //display: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 30,
        width: "100%"
    },
    pregunta: {
        backgroundColor: "#009A7E",
        marginBottom: 50,
    },
    respuesta: {
        backgroundColor: "#009A7E",
        fontFamily: "Rationale",
        marginBottom: 50
    },
    checkP: {
        color: "#113163",
        marginLeft: 150
    },  
    text: {
        fontFamily: "Rationale",
        color: "#fff"
        //alignitems: "center",
    },
    textP: {
        fontFamily: "Rationale",
        color: "#113163"
        //alignitems: "center",
    },
    btnC: {
        background: "#000",
        textAlign: "center",
        width: 150,
        fontFamily: "Rationale",
    },
    link:{
        marginRigth: 100
    },
    textB: {
        fontFamily: "Rationale",
    },
    btn:{
        marginTop: 20,
    },
    linkA: {
        textDecoration: "none"
    }
}));

const PreguComponente = () => {
    const classes = useStyles();
    const router = useRouter();
    const { user } = useAuth();
    const { id } = router.query;
    const [contents, setContents] = useState(null);
    const [contentsA, setContentsA] = useState([]);
    const [idcontentN, setIdContentN] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [checked, setChecked] = useState(0);
    const [option, setOption] = useState(0);
    const [nextContent, setNextContent] = useState(null);

    useEffect(() => {
        contentT(); 
      }, [id]);

    useEffect(() => {
    }, [contents]);
     
    async function contentT() {
        try {
            const contentTh = await Content.content(id);
            contentsTheme(contentTh.data.theme_id,);
            setContents(contentTh.data);
            contentAnswer(contentTh.data);    
        } catch(error){
    
        }
      }
      
    async function contentsTheme(idTheme) {
        try {
            const contentsTheme = await Content.contentTheme(idTheme);
            const contenidos = contentsTheme.data;
            var idCont = -1;
            if(id == contenidos[contenidos.length - 1].id){
                setNextContent(true);
            } else {
                for(const element in contenidos){
                    if(id == contenidos[element].id){
                        idCont = element;
                    }
                }
                setIdContentN(contenidos[++idCont].id);                
                setNextContent(false);
            }
        } catch(error){
    
        }
      }
    
    function contentAnswer(cont) {
        let arrayContentA = [];
        arrayContentA.push(cont.answer_1);
        arrayContentA.push(cont.answer_2);
        arrayContentA.push(cont.answer_3);
        arrayContentA.push(cont.answer_4);
        setAnswer(arrayContentA[0]);
        let arrayD = arrayContentA;
        arrayD = arrayD.sort(function() {
            return Math.random() - 0.5
        });  
        setContentsA(arrayD);
    }

    function select(content) {
        let resp = 1;
        if(content == answer){
            resp = 2; 
        }
        setChecked(resp);
    } 

    function selectAnswer(){
        setOption(checked);
    } 

    async function achievementD() {
        const achievementDetail = await AchievementDetails.achievementsDetailsAll();
        createAchievementDetail(achievementDetail);
      }

    async function createAchievementDetail(achievem){
        const data = {
            achievement_id: contents.theme_id,
            user_id: user.user.id,
            content_id: contents.id,
            theme_id: contents.theme_id,
        };

        let achievement = [];
        if(achievem.data.length === 0){
            achievement = await AchievementDetails.create(data);
        }else {
            achievement = await AchievementDetails.update(achievem.data[0].id, data); 
        };
    }
      
    return (
    <Grid container>
        <Grid container className={classes.containerPreg}>
            <Grid item={true} xs={12} className={classes.pregunta}>
                <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.textP}
                >
                    Pregunta: {contents && contents.question} 
                </Typography>

                <Grid className={classes.list}>
                <List className={classes.listT}>
                {contentsA.map((contenido, index) => (
                  <ListItem key={index}> 
                    <ListItemText>
                    {<FormControlLabel
                control={
                    <Checkbox
                    icon={<PanoramaFishEyeIcon />}
                    checkedIcon={<LensIcon />}
                    className={classes.checkP}
                    onClick={() =>  select(contenido) }
                    />
                }
                label={<Typography
                    variant="h5"
                    gutterBottom
                    className={classes.text}
                    >
                        {contenido}
                    </Typography>}
                />}
                    </ListItemText>
                  </ListItem>
                  
                  ))}
                </List>
              </Grid>
              <Grid item={true} xs={6} className={classes.pregunta}>
                  <Button variant="contained" className={classes.btn} onClick={() =>  selectAnswer() }>
                          <Typography
                          variant="h5"
                          gutterBottom
                          className={classes.textB}
                          >
                              Seleccionar respuesta
                          </Typography>
                      </Button>
              </Grid>
            </Grid>
                    
            {option === 2 ? 
                <Grid xs={12} className={classes.respuesta}>
                <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.text}
                >
                    Respuesta: {contents && contents.feedback}
                </Typography>
                { nextContent === true ?
                <Grid>
                    <Grid>
                    <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.textP}
                        >
                            TEMA COMPLETADO
                        </Typography>
                    </Grid>
                    <Link href={`/logro/${contents.theme_id}`}>
                    <Button variant="contained" className={classes.btnC} onClick={() => achievementD()}>
                        <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.text}
                        >
                            Consigue tu logro
                        </Typography>
                    </Button>
                    </Link>
                </Grid>
                : <Grid>
                    <a href={`/contenido/${idcontentN}`} className={style.etA}>
                <Button variant="contained" className={classes.btnC}>
                    <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.text}
                    >
                        Siguiente Contenido
                    </Typography>
                </Button>
                </a>
                </Grid>}
             </Grid>
             : option === 1 ? <Grid xs={12} className={classes.respuesta}>
             <Typography
                 variant="h4"
                 gutterBottom
                 className={classes.text}
             >
                 Larespuesta es incorrecta
             </Typography>
          </Grid>
          : '' }
        </Grid>
    </Grid>
  );
};

export default PreguComponente;
