import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ConteComponente from "@/components/ConteComponente";
import PreguComponente from "@/components/PreguComponente";
import Footer from "@/components/PerfilFooter.js";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Theme from "../../api/theme";
import Content from "../../api/content.js";
import style from "@/styles/Main.module.css";
import ContentDetails from "../../api/contentDetails";
import ThemeDetails from "src/api/themeDetails";
import Locked from "@/components/Locked";
import User from "../../api/user";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

const useStyles = makeStyles((theme) => ({
    headerH: {
        textAlign: "center",
        background: "#113163",
        height: 160,
        alignContent: "center",
        border: "1px solid #fff",
    },
    textH: {
        fontFamily: "Rationale",
        color: "#fff",
        marginRight: 140
    },
    containerH: {
        marginTop: 50
    },
    buttonH: {
        fontSize: 25,
        color: "#000",
        fontFamily: "Rationale",
      },
    iconoH: {
        color: "#fff"
    },
    gridH: {
        marginTop: 40
    },
    container: {
        backgroundColor: "#fff",
        border: "1px solid #fff",
        backgroundColor: "#009A7E",
    },
    cont1: {
        height: 700,
    },
    btnA: {
        float: "left",
        fontFamily: "Rationale",
    },
    btnS: {
        fontFamily: "Rationale",
    },
    buttonS: {
        float: "right",
        marginTop: 10,
        marginRight: 10,
    },
    buttonA: {
        marginTop: 10,
        marginLeft: 10,
    },
    cont2: {
        height: 100,
    },
    text: {
        marginTop: 20,
        fontFamily: "Rationale",
        textAlign: "center",
        color: "#fff",
    },
    seccion: {
        justifyContent: "center",
    },
    containerPregunta: {
        height: "100%"
    }
}));

export default function contentPage() {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [stateComponent, setStateComponent] = useState(1);
    const [contentDetailA, setContentDetailA] = useState([]);
    const [themeT, setThemeT] = useState(null);
    const [contTheme, setContTheme] = useState([]);
    const [day, setDay] = useState(null);
    const [lockedContent, setLockedContent] = useState(false);

    useEffect(() => {
        getAuthenticatedUser();
        dateN();
      }, [id, day]);

      useEffect(() => {

      }, [contTheme]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleChangeComponent = (state) => {
        setStateComponent(state);
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
    
    async function contentsDetailA() {
        const contentDetail = await ContentDetails.contentsDetailsAll();
        contentNow(contentDetail.data[0].id);
      }

    function contentNow(idC) {
       const content = ContentDetails.update(idC, contentDetailA); 
        
    }

    async function getAuthenticatedUser() {
    try {
      const response = await User.getAuthenticatedUser();
      contentTheme(response.data);
      return response;
    } catch (error) {
    }
  }

    async function contentTheme(user) {
        try {
            const contTheme = await Content.content(id);
            themeDetailA(contTheme.data.theme_id, user);
            setContTheme(contTheme.data);
        } catch(error){

        }
      }

    async function themeDetailA(idT, user) {
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
          var idThemeAc = idT;
          idThemeAc = --idThemeAc;
          
            if(user.experience == 0 && id == 1){
                setLockedContent(true);
            }
            else if(user.experience == 2 && id == 2){
            setLockedContent(true);
            }
            else if(user.experience == 4 && id == 3){
            setLockedContent(true);
            }
            else if(user.experience == 6 && id == 4){
            setLockedContent(true);
            }
            else if(user.experience == 18 && id == 5){
            setLockedContent(true);
            }
            else if(user.experience == 20 && id == 6){
            setLockedContent(true);
            }
            else if(user.experience == 22 && id == 7){
            setLockedContent(true);
            }
            else if(user.experience == 24 && id == 8){
            setLockedContent(true);
            }
            else if(user.experience == 26 && id == 9){
            setLockedContent(true);
            }
            else if(user.experience == 34 && id == 10){
            setLockedContent(true);
            }
            else if(user.experience == 36 && id == 11){
            setLockedContent(true);
            }
            else if(user.experience == 38 && id == 12){
            setLockedContent(true);
            }
            else if(user.experience == 40 && id == 13){
            setLockedContent(true);
            }
            else if(user.experience == 50 && id == 14){
            setLockedContent(true);
            }
            else if(user.experience == 52 && id == 15){
            setLockedContent(true);
            }
            else if(user.experience == 54 && id == 16){
            setLockedContent(true);
            }
            else if(user.experience == 66 && id == 17){
            setLockedContent(true);
            }
            else if(user.experience == 68 && id == 18){
            setLockedContent(true);
            }
            else if(user.experience == 70 && id == 19){
            setLockedContent(true);
            }
            else if(user.experience == 82 && id == 20){
            setLockedContent(true);
            }
            else if(user.experience == 84 && id == 21){
            setLockedContent(true);
            }
            else if(user.experience == 86 && id == 22){
            setLockedContent(true);
            }
            else if(user.experience == 88 && id == 23){
            setLockedContent(true);
            }
    
          themeInf(idT);
        }catch(error){
  
        }
      }

    
    async function themeInf(idT) {
        try{
            const theme = await Theme.theme(idT);
            setThemeT(theme.data);
            const data = {
                content_id: id,
                theme_id: theme.data.id,
                date: day,
              };  
            setContentDetailA(data);
            return theme;
        }catch(error){
            
        }
    }

    return (
    <React.Fragment>
        <CssBaseline />
        <div className={style.container}>
            <Container >
            {lockedContent == true ? 
            <Grid>
            <Grid container spacing={0} className={classes.headerH}>
            <Grid xs={2} className={classes.img}> 
                <Image
                    src={logo} 
                    height={160}
                    width={160} 
                    /></Grid>
                <Grid xs={9} className={classes.containerH}>
                    <Typography variant="h3" gutterBottom className={classes.textH}>
                    {themeT && themeT.title}
                    </Typography>
                </Grid>
                <Grid xs={1} className={classes.gridH}>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        className={classes.iconoH}
                        onClick={handleClick}
                    >
                        <ArrowDropDownCircleRoundedIcon  style={{ fontSize: 45 }}/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link href="/perfil">
                                <Typography variant="h5" gutterBottom className={classes.buttonH} onClick={() => contentsDetailA()}>
                                Regresar a la página de temas
                                </Typography>       
                            </Link>
                        </MenuItem>
                    </Menu>
                    </Grid>
            </Grid>
                {stateComponent === 1 ? 
                <Grid spacing={0} className={classes.container}>
                <Grid spacing={0} className={classes.cont1}>
                    <Grid>
                    <Grid className={classes.buttonS}>
                        <Button variant="contained" onClick={() =>  handleChangeComponent(2) } className={classes.btnS}>
                            Siguiente
                        </Button>
                    </Grid>  
                    </Grid> 
                    <Grid container className={classes.seccion}>
                        <Typography variant="h4" gutterBottom className={classes.text}>
                        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                            SECCION DEL CONTENIDO
                        </Typography>    
                    </Grid> 
                    <Grid container >
                         <ConteComponente />         
                    </Grid>
                </Grid>
            </Grid>: 
            <Grid spacing={0} className={classes.container}>
            <Grid spacing={0} className={classes.containerPregunta}>
            <Grid>
                <Grid  className={classes.buttonA}>
                    <Button  variant="contained" onClick={() =>  handleChangeComponent(1) }  className={classes.btnA}>
                        Anterior
                    </Button>
                </Grid>   
                </Grid> 
                <Grid container className={classes.seccion}>
                        <Typography variant="h4" gutterBottom className={classes.text}>
                        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                            SECCION DE LA PREGUNTA
                        </Typography>    
                    </Grid>  
                <Grid container>
                    <PreguComponente />     
                </Grid>
            </Grid>
        </Grid>       
    }    
    </Grid>: 
        <Grid>
        <Grid container spacing={0} className={classes.headerH}>
            <Grid xs={2} className={classes.img}> 
                <Image
                    src={logo} 
                    height={160}
                    width={160} 
                    /></Grid>
                <Grid xs={10} className={classes.containerH}>             
                </Grid>
            </Grid>
        <Locked />
        </Grid>
        }
        </Container>
        <Footer />
        </div>
    </React.Fragment>
    );
};
