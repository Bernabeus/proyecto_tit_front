import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "@fontsource/rationale";
import style from "@/styles/Main.module.css";
import { useRouter } from "next/router";
import Content from "../api/content";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";
import AchievementDetails from "src/api/achievementDetails";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';

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
    radioGr:{
        marginLeft: 100
    },
    textB: {
        fontFamily: "Rationale",
    },
    btn:{
        marginTop: 20,
    },
    linkA: {
        textDecoration: "none"
    },
    root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
}));

function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

const PreguComponente = () => {
    const classes = useStyles();
    const router = useRouter();
    const { user } = useAuth();
    const { id } = router.query;
    const [contents, setContents] = useState(null);
    const [contentsA, setContentsA] = useState([]);
    const [idcontentN, setIdContentN] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [value, setValue] = useState('');
    const [valueDisabled, setValueDisabled] = useState(null);
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

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var resp = 1;
        if (value == answer) {
            resp = 2; 
        }
        setOption(resp);
      };

    async function achievementD() {
        const achievementDetail = await AchievementDetails.achievementsDetailsAll();
        createAchievementDetail(achievementDetail);
      }

    async function createAchievementDetail(achievem){

        const data = {
            achievement_id: contents.theme_id,
            user_id: user.id,
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
                <form onSubmit={handleSubmit}>
                    <Grid className={classes.radioGr}>
                    <RadioGroup defaultValue="" value={value} onChange={handleRadioChange}  name="customized-radios">
                    {contentsA.map((contenido) => (
                        <FormControlLabel value={contenido} control={<StyledRadio />} label={
                        <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.text}
                        >
                            {contenido}
                        </Typography>               
                    } />
                    ))}
                    </RadioGroup>

                    </Grid>
                    <Grid item={true} xs={6} className={classes.pregunta}>
                        <Button type="submit" variant="contained" className={classes.btn} >
                                <Typography
                                variant="h5"
                                gutterBottom
                                className={classes.textB}
                                >
                                    Seleccionar respuesta
                                </Typography>
                            </Button>
                    </Grid>
                </form>
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
