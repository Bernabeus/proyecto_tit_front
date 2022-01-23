import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
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
        marginTop: 50,
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
        border: "1px solid #fff",
        backgroundColor: "#009A7E",
    },
    cont1: {
        height: "100%",
    },
    containerContent: {
        marginTop: 50,
        border: "3px solid #000",
        borderRadius: 50,
        background: "#113163",

    },
    textT: {
        color: "#009A7E",
        fontFamily: "Rationale",
    },
    textC: {
        fontFamily: "Rationale",
    }

}));

export default function contentPage() {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const [contentAll, setContentAll] = useState([]);
    const [themeT, setThemeT] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);


    useEffect(() => {
        themeInf();
      }, [id]);

    async function themeInf() {
        try{
            const idT = id;
            const theme = await Theme.theme(idT);
            contentsDetailA(idT);
            setThemeT(theme.data);
            
            return theme;
        }catch(error){
            console.log();
        }
    }

    async function contentsDetailA(idT) {
        try{
            const contentDetail = await Content.contentTheme(idT);
            setContentAll(contentDetail.data);
        }catch(error){   
            console.log();
        } 
      }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <React.Fragment>
        <CssBaseline />
        <div className={style.container}>
            <Container >
            <Grid item={true} container className={classes.headerH}>
            <Grid item={true} xs={1}></Grid>
            <Grid item={true} xs={2} className={classes.img}> 
                <Image
                    src={logo} 
                    height={160}
                    width={160} 
                    /></Grid>
                <Grid item={true} xs={7} className={classes.containerH}>
                    <Typography variant="h4" gutterBottom className={classes.textH}>
                    Contenidos del tema: {themeT && themeT.title}
                    </Typography>
                </Grid>
                <Grid item={true} xs={1} className={classes.gridH}>
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
                                <Typography variant="h5" gutterBottom className={classes.buttonH}>
                                Regresar a la página de temas
                                </Typography>       
                            </Link>
                        </MenuItem>
                    </Menu>
                    </Grid>
                    <Grid item={true} xs={1}></Grid>
            </Grid>   
            <Grid item={true} className={classes.container}>
                <Grid item={true} className={classes.cont1}>
                    <Grid item={true} style={{ marginBottom: '50px'}}>
                    {contentAll.map((cont, index) => (
                        <Grid item={true} key={index} className={classes.containerContent}  style={{ marginLeft: '70px', marginRight: '70px' }}>
                            <Grid item={true} style={{ marginLeft: '70px', marginRight: '70px', marginTop: '20px', marginBottom: '20px' }}>
                            <Typography variant="h4" gutterBottom className={classes.textT}>
                                Contenido {index + 1}
                            </Typography> 
                            <Typography variant="h4" gutterBottom className={classes.textC}>
                                {cont.description}
                            </Typography> 
                            </Grid>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        <Footer />
        </div>
    </React.Fragment>
    );
};
