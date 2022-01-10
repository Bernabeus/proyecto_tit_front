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
import Footer from "@/components/Footer.js";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Theme from "../../api/theme";
import Content from "../../api/content.js";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

const useStyles = makeStyles((theme) => ({
    headerH: {
        textAlign: "center",
        background: "#113163",
        height: 160,
        alignContent: "center",
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
        border: "1px solid #000000",
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
    const [contentShow, setContentShow] = useState(null);
    const [themeT, setThemeT] = useState(null);
    const [contTheme, setContTheme] = useState([]);
    

    useEffect(() => {
        contentTheme()
      }, [id]);

      useEffect(() => {
      }, [contTheme]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeContent = (content) => { 
        setContentShow(content);
    }

    const handleChangeComponent = (state) => {
        setStateComponent(state);
    }

    async function contentTheme() {
        try {
            const contTheme = await Content.content(id);
            themeInf(contTheme.data.theme_id);
            setContTheme(contTheme.data);
        } catch(error){
    
        }
      }

    async function themeInf(idT) {
        try{
            const theme = await Theme.theme(idT);
            setThemeT(theme.data);
            return theme;
        }catch(error){
            
        }
    }

    return (
    <React.Fragment>
        <CssBaseline />
            <Container >
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
                            <Link href="/">
                                <Typography variant="h5" gutterBottom className={classes.buttonH}>
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
    
        </Container>
        <Footer />
    </React.Fragment>
    );
};
