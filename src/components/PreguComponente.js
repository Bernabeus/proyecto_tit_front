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
import { useAuth } from "@/contexts/auth";
import AchievementDetails from "src/api/achievementDetails";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import User from "src/api/user";
import ContentDetails from "../api/contentDetails";
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    containerPreg: {
        //display: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //textAlign: "center",
        marginTop: 30,
        width: "100%",
        backgroundColor: "#113163",
        paddingTop: 50,
        border: "3px solid #000",
        borderRadius: 50,
        marginLeft:30,
        marginRight: 30,
    },
    pregunta: {
        backgroundColor: "#113163",
        marginBottom: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btnPreg: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    respuesta: {
        backgroundColor: "#fff",
        fontFamily: "Rationale",
        marginBottom: 50,
        paddingTop: 20,
        border: "3px solid #000",
        borderRadius: 50,
        marginLeft:30,
        marginRight: 30,
    },
    checkP: {
        color: "#113163",
        marginLeft: 150
    },  
    text: {
        fontFamily: "Rationale",
        color: "#fff",
        textAlign: "justify"
        //alignitems: "center",
    },
    textP: {
        fontFamily: "Rationale",
        color: "#fff"
        //alignitems: "center",
    },
    btnC: {
        background: "#009A7E",
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

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
      textDis: {
        color: "#000",
        fontFamily: "Rationale",
        textAlign: "justify"
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
  },
  textL: {
    justifyContent: "left",
    fontFamily: "Rationale",
  },
  btnSig: {
      display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textR: {
      color:"#113163",
      fontFamily: "Rationale",
  }
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
    const [stateRes, setStateRes] = useState(1);
    const [answer, setAnswer] = useState(null);
    const [value, setValue] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [option, setOption] = useState(0);
    const [nextContent, setNextContent] = useState(null);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        contentT(); 
      }, [id]);

    useEffect(() => {
    }, [contents]);

    //Conseguir el contenido dependiendo del tema actual
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
    
      //Se agrupan en un arreglo las respuestas opciones 
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

    //Determina si fue escogida la respuesta correcta
    const handleSubmit = (event) => {
        event.preventDefault();
        var resp = 0;
        if (value == answer) {
            resp = 2; 
            handleChangeResult(2);
        } else {
            resp = 1; 
            handleChangeResult(2);
        }


        setOption(resp);
      };

    //Buscaba y determinaba el logro que seria dado
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
        contentTerTheme();
    }

    //subida de nivel,experiencia,rango y progreso al terminar un tema
    async function contentTerTheme(){
        setOpen(true);
        const dataRank = [
            {
              rank:'Sargento en la Ciberseguridad',
              experience: 16
            },
            {
              rank:"Subteniente en la Ciberseguridad",
              experience: 32
            },
            {
              rank:"Coronel en la Ciberseguridad",
              experience: 48
            },
            {
              rank:"Teniente en la Ciberseguridad",
              experience: 64
            },
            {
              rank:"Coronel en la Ciberseguridad",
              experience: 80
            },
            {
                rank:"Capitán General en la Ciberseguridad",
                experience: 100
            }
          ];

          let exp = 0;
          var rankA = "";
          for(var i = 1; i <= 6; i++){
            if(contents.theme_id == i){
              rankA = dataRank[i-1].rank;
              exp = dataRank[i-1].experience;
            }
          } 
        
        let prog = 0;
        const lvl = user.level + 1;
        if(contents.theme_id==6){
            prog = user.progress + (20);
        }else{
            prog = user.progress + (16);
        }

        const userId = user.id;
        const data = {
            experience: exp,
            progress: prog,
            level: lvl,
            rank: rankA
        };

        const userA = await User.update(userId, data);
        router.push(`/logro/${contents.theme_id}`);
    }


    //subida de experiencia terminar un contenido
    async function contentNext(){
        try{
        setOpen(true);
         const response = await User.getAuthenticatedUser();
        userExpe(response.data);
        }catch (error) {
    }
        
    }

    async function userExpe(userInfo) {
    try {
        const exp = userInfo.experience + (2);
        const userId = user.id;
        const data = {
            experience: exp
        };
        const userA = await User.update(userId, data);
        contentsDetailA();
     
    } catch (error) {
    }
  }
      
    async function contentsDetailA() {
        const contentDetail = await ContentDetails.contentsDetailsAll();
        contentNow(contentDetail.data[0]);
    }
  
    async function contentNow(Content) {     
        var idC = id;
        idC = ++idC;
        var idT = Content.theme_id;
        if(idT<=6){
            const data = {
                content_id: idC,
                theme_id: idT,
              };  
           const contentY = await ContentDetails.update(Content.id, data); 
        } 
        location.replace(`/contenido/${idcontentN}`);
    }

    //Desabilitar todas las opciones
    const handleChangeResult = (state) => {
        setStateRes(state);
        setBtnDisabled(true);
    }
      
    return (
    <Grid item={true} container>
        <Grid item={true} container className={classes.containerPreg}>
            <Grid item={true} xs={12} className={classes.pregunta}>
                <Grid item={true} xs={1}></Grid>
                <Grid item={true} xs={4}>
                <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.textP}
                >
                    Pregunta: {contents && contents.question} 
                </Typography>
                </Grid>
                <Grid item={true} xs={7}>
                <form onSubmit={handleSubmit}>
                {stateRes === 1 ?
                    <Grid item={true} className={classes.radioGr}>
                    <RadioGroup defaultValue="" value={value} onChange={handleRadioChange}  name="customized-radios">
                    {contentsA.map((contenido, index) => (
                        <FormControlLabel value={contenido} key={index} control={<StyledRadio />} label={
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

                    </Grid>:
                        <Grid item={true} className={classes.radioGr}>
                        <RadioGroup defaultValue="" value="disabled" onChange={handleRadioChange}  name="customized-radios">
                        {contentsA.map((contenido, index) => (
                            <FormControlLabel value={contenido} key={index} control={<StyledRadio />} label={
                            <Typography
                            variant="h5"
                            gutterBottom
                            className={classes.textDis}
                            >
                                {contenido}
                            </Typography>               
                        } />
                        ))}
                        </RadioGroup>
    
                        </Grid>
                    
                    }
                    <Grid item={true} item={true} xs={6} className={classes.btnPreg}>
                        <Button type="submit" variant="contained" disabled={btnDisabled} className={classes.btn} >
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
            </Grid>

            {option === 2 ? 
                <Grid item={true} xs={12} className={classes.respuesta}>
                <Typography
                variant="h4"
                gutterBottom
                className={classes.textR}
                >
                    Respuesta correcta:
                </Typography>
                <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.textR}
                >
                    {contents && contents.feedback}
                </Typography>
                { nextContent === true ?
                <Grid item={true}>
                    <Grid item={true} className={classes.btnSig}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.textR}
                        >
                            TEMA COMPLETADO
                        </Typography>
                    </Grid>
                    <Grid item={true}>
                    <Button variant="contained" className={classes.btnC} onClick={() => achievementD()}>
                        <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.textR}
                        >
                            Consigue tu logro
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
                                CARGANDO LOGRO, ESPERE UN MOMENTO
                              </Typography> 
                        </Collapse>
                        </Grid>
                </Grid>
                :
                <Grid item={true} className={classes.btnSig}> 
                <Grid item={true}>
                <Button variant="contained" className={classes.btnC} onClick={() => contentNext()}>
                    <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.textR}
                    >
                        Siguiente Contenido
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
                    </Grid>
                        }
             </Grid>
             : option === 1 ? <Grid item={true} xs={12} className={classes.respuesta}>
             <Typography
                 variant="h4"
                 gutterBottom
                 className={classes.textR}
             >
                 La respuesta es incorrecta, regrese al contenido. 
             </Typography>
          </Grid>
          : '' }
        </Grid>
    </Grid>
  );
};

export default PreguComponente;
