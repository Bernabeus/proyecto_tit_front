import React, { useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Box from '@material-ui/core/Box';
import Image from "next/image";
import medalla from "../../../public/images/medalla.png";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import User from "../../api/user";
import Themes from "@/components/ThemeComponent.js";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#fff",
        border: "1px solid #000000",
    },
    cont1: {
        display: "flex",
        alignItems: "center",
        margin: "0 auto",
        
        height: 400,
    },
    contP: {
        backgroundColor: "#009A7E",
        border: "2px solid #000000",
        borderRadius: 100,
        width: "100%",
        height: 320,
        alignContent: "center"
    },
    contP1: {
        textAlign: "center",
        alignContent: "center"
    },
    text: {
        fontFamily: "Rationale",
        color: "#fff"
    },
    progr:{
        width: 300,
        height: 20
    },
}));

export default function PerfilBody() {
    const classes = useStyles();
    const [ user, setUser ] = useState([]);
    
    useEffect(() => {
        getAuthenticatedUser();
    }, []);

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
            <Container >
            <Grid className={classes.container}>
                {user && 
                <Grid  className={classes.cont1}>
                <Grid container className={classes.contP}>
                    <Grid container item={true} xs={6} className={classes.contP1}>
                        <Grid item={true} xs={12} className={classes.boxP}>
                            <Box>
                                <Image
                                src={medalla} 
                                height={200}
                                width={200} 
                                />
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Nombre del maximo logro
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Nombre: {user && user.name}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} className={classes.text23}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Experiencia: 
                                <LinearProgress variant="determinate" className={classes.progr} value={user ? user.experience: ''} ></LinearProgress>
                            </Typography>
                            
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Rango: {user ? user.rank: ''}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Nivel: {user ? user.level: ''}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Progreso del curso: {user ? user.progress: '' }%
                            </Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                }
                <Themes />
            </Grid>
        </Container>
    </React.Fragment>
    );
};
