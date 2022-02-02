import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from "next/image";
import portada from "../../../public/images/portadaInfo.jpg";
import banner from "../../../public/images/imagen5.png";
import banner1 from "../../../public/images/imagen1.png";
import logro1 from "../../../public/images/t1B.png";
import logro2 from "../../../public/images/t2B.png";
import logro3 from "../../../public/images/t1I.png";
import logro4 from "../../../public/images/t2I.png";
import logro5 from "../../../public/images/t1A.png";
import logro6 from "../../../public/images/t2A.png";
import Divider from "@material-ui/core/Divider";
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import SecurityIcon from '@mui/icons-material/Security';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import StarIcon from '@mui/icons-material/Star';
import logo from "../../../public/images/logo1.png";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    cont: {
        height: 160,
        backgroundColor: "#113163",
        marginBottom: 20,
        border: "3px solid #000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    img: { 
    },
    title: {
        fontFamily: "Rationale",
        color: "#ffffff",
        textAlign: "center",
        backgroundColor: "#113163",
        textDecorationLine: "underline",
        [theme.breakpoints.up('xs')]: {
            fontSize: '4.5vw'
          },
          [theme.breakpoints.up('sm')]: {
              fontSize: '4vw'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '3.5vw'
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '3vw'
      }
    },
    titleCover: {
        fontFamily: "Rationale",
        color: "#113163",
        textAlign: "center",
        textDecorationLine: "underline",
    },
    contentOne: {
        fontFamily: "Rationale",
        color: "#113163",
        textAlign: "center",
        backgroundColor: "#ffffff",
    },
    contentStyle: {
        border: "solid 5px #009A7E",
        padding: "20px"
    },
    coverPhoto: {
        textAlign: "center",
    },
    dividerTransparent: {
        backgroundColor: "transparent",
        height: 30,
    },
    contentTwo: {
        fontFamily: "Rationale",
        color: "#113163",
        textAlign: "center",
        backgroundColor: "#ffffff",
        textDecorationLine: "underline",
    },
    textList: {
        textAlign: "center",
        color: "#113163",
        fontFamily: "Rationale",
        
    },
    bannerContent: {
        textAlign: "center",
        color: "#113163",
    },
    bannerTitle: {
        fontFamily: "Rationale",
        color: "#113163",
        textAlign: "center",
        textDecorationLine: "underline",
    },
    imageBanner: {
        textAlign: "center",
    },
    btnC: {
        border: "2px solid #000000",
        backgroundColor: "#009A7E",
    },
    textBtn: {
        color: "#fff",
        fontFamily: "Rationale",
        [theme.breakpoints.up('xs')]: {
            fontSize: '2.5vw'
          },
          [theme.breakpoints.up('sm')]: {
              fontSize: '2vw'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1.5vw'
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '1.3vw'
      }
    }

}));

function redirectPerfil(){
    location.replace("/perfil");
}


const InformationPage = () => {
    const classes = useStyles();

    return (
        <Grid item={true} container>
            <Grid item={true} container item xs={12} className={classes.cont}>
                <Grid item={true} xs={2} className={classes.img}> 
                <Image
                    src={logo} 
                    height={160}
                    width={160} 
                    />
                </Grid>
                <Grid xs={7} >
                <Typography variant="h4" gutterBottom className={classes.title}>
                    Información general del curso
                </Typography>
                </Grid>
                <Grid item={true} xs={2} >
                    <Button variant="contained" className={classes.btnC} onClick={() => redirectPerfil()}>
                    <Typography variant="h6" gutterBottom className={classes.textBtn}>
                                 Ir a la pagina principal
                                </Typography>  
                    </Button> 

                    <Divider className={classes.dividerTransparent} />
                    </Grid>
                
            </Grid>
            
            <Grid item={true} xs={12} className={classes.titleCover}>
                <Typography variant="h4" gutterBottom className={classes.contentOne}>
                    ¡El curso que necesitas para saber sobre ciberseguridad!
                </Typography>
            </Grid>
            <Grid item={true} xs={12} className={classes.coverPhoto}>
                <Image
                    src={portada}
                    height={300}
                    width={900}
                />
                <Divider className={classes.dividerTransparent} />
            </Grid>
            <Grid item={true} xs={12} className={classes.contentStyle}>
                <Typography variant="h5" gutterBottom className={classes.contentOne}>
                    La ciberseguridad tiene como objetivo principal proteger los datos, muchos de ellos confidenciales, evitando el robo de los mismos, los ataques cibernéticos y las usurpaciones de identidad.
                    Tener un conocimiento básico de ciberseguridad te ayudará a proteger tus sistemas contra diversas amenazas como el ramsomware, malware, entre otros. Así, tus datos y redes estarán seguras evitando el
                    ingreso de usuarios no autorizados que puedan tener malas intenciones.
                </Typography>

            </Grid>
            <Grid item={true} xs={12}>

                <Divider className={classes.dividerTransparent} />

                <Typography variant="h4" gutterBottom className={classes.contentTwo}>
                    ¿Qué aprenderás en este curso?
                </Typography>

            </Grid>
            <Grid item={true} xs={12} className={classes.contentStyle} >
                <Typography variant="h5" gutterBottom className={classes.textList}><SecurityIcon />Conozceras qué es la ciberseguridad y su impacto en la actualidad.</Typography>
                <Typography variant="h5" gutterBottom className={classes.textList}><NoEncryptionIcon />Conozceras las amenazas, los ataques y las vulnerabilidades más comunes.</Typography>
                <Typography variant="h5" gutterBottom className={classes.textList}><AddModeratorIcon /> Obtendras información sobre cómo las empresas protegen sus operaciones de los ataques.</Typography>
                <Typography variant="h5" gutterBottom className={classes.textList}><VpnKeyIcon />Conozceras las últimas tendencias laborales y por qué sigue creciendo el campo de la ciberseguridad.</Typography>
            </Grid>
            <Grid item={true} item xs={12} className={classes.bannerContent}>
                <Divider className={classes.dividerTransparent} />
                <Typography variant="h4" gutterBottom className={classes.bannerTitle}>¿Cómo funciona el curso?</Typography>
            </Grid>
            <Grid item={true} container >
                <Grid item={true} xs={12} md={6} lg={6} className={classes.imageBanner}>
                    <Image
                        src={banner1}
                        height={300}
                        width={650}
                    />
                </Grid>
                <Grid item={true} xs={12} md={6} lg={6} className={classes.contentStyle}>
                <Typography variant="h5" gutterBottom className={classes.textList}>Características del curso</Typography>
                    <Typography variant="h6" gutterBottom className={classes.textList}><LightbulbIcon />Gana experiencia con cada tema completado.</Typography>
                    <Typography variant="h6" gutterBottom className={classes.textList}><PublishedWithChangesIcon />Avanza con los temas en modo básico, intermedio y avanzado.</Typography>
                    <Typography variant="h6" gutterBottom className={classes.textList}><StarIcon />Consigue insignias con cada tema completado.</Typography>
                    <Typography variant="h6" gutterBottom className={classes.textList}><ShowChartIcon />Sube de rango y alcanza el rango de Capitán General en la Ciberseguridad.</Typography>
                </Grid>
            </Grid>
            <Grid item={true} item xs={12} className={classes.bannerContent}>
                <Divider className={classes.dividerTransparent} />
                <Typography variant="h4" gutterBottom className={classes.bannerTitle}>Logros del curso</Typography>
            </Grid>
            <Grid item={true} container >
                <Grid item={true} xs={12} md={6} lg={6} className={classes.contentStyle}>
                    <Typography variant="h5" gutterBottom className={classes.textList}>Al completar un tema se desbloqueará un logro con su respectiva medalla, estas son:</Typography>
                    <Grid container style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid xs={12} md={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                        src={logro1}
                        height={70}
                        width={70}
                    />
                    </Grid>
                    <Grid xs={12} md={8}>
                    <Typography variant="h6" gutterBottom className={classes.textList}>Del primer tema con la dificultad Básico.<br />Rango obtenido: Sargento en la Ciberseguridad</Typography>
                    </Grid>                 
                    </Grid>
                    <Grid container style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid  xs={12} md={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                        src={logro2}
                        height={70}
                        width={70}
                    />
                    </Grid>
                    <Grid xs={12} md={8}>
                    <Typography variant="h6" gutterBottom className={classes.textList}>Del segundo tema con la dificultad Básico.<br />Rango obtenido: Subteniente en la Ciberseguridad</Typography>
                    </Grid>
                    </Grid>
                    <Grid container style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid xs={12} md={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                        src={logro3}
                        height={70}
                        width={70}
                    />
                    </Grid>
                    <Grid xs={12} md={8}>
                    <Typography variant="h6" gutterBottom className={classes.textList}>Del primer tema con la dificultad Intermedio.<br />Rango obtenido: Coronel en la Ciberseguridad</Typography>
                    </Grid>
                    </Grid>
                    <Grid container style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid xs={12} md={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                        src={logro4}
                        height={70}
                        width={70}
                    />
                    </Grid>
                    <Grid xs={12} md={8}>
                    <Typography variant="h6" gutterBottom className={classes.textList}>Del segundo tema con la dificultad Intermedio.<br />Rango obtenido: Teniente en la Ciberseguridad</Typography>
                    </Grid>
                    </Grid>
                    <Grid container style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid xs={12} md={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                        src={logro5}
                        height={70}
                        width={70}
                    />
                    </Grid>
                    <Grid xs={12} md={8}>
                    <Typography variant="h6" gutterBottom className={classes.textList}>Del primer tema con la dificultad Avanzado.<br />Rango obtenido: Coronel en la Ciberseguridad</Typography>
                    </Grid>
                    </Grid>
                    <Grid container style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid xs={12} md={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                        src={logro6}
                        height={70}
                        width={70}
                    />
                    </Grid>
                    <Grid xs={12} md={8}>
                    <Typography variant="h6" gutterBottom className={classes.textList}>Del segundo tema con la dificultad Avanzado.<br />Rango obtenido: Capitán General en la Ciberseguridad</Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} md={6} lg={6} className={classes.imageBanner}>
                    <Image
                        src={banner}
                        height={570}
                        width={650}
                    />
                </Grid>
            </Grid>
        </Grid>
    );

};

export default InformationPage;