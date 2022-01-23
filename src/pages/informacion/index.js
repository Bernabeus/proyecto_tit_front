import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from "next/image";
import style from "@/styles/Main.module.css";
import portada from "../../../public/images/portadaInfo.jpg";
import banner from "../../../public/images/banner.jpg";
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
        marginTop: "-15px",
        marginLeft: "-60px",
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
                        src={banner}
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
        </Grid>
    );

};

export default InformationPage;