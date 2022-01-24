import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Button } from "@material-ui/core";
import style from "@/styles/Loading.module.css";

const useStyles = makeStyles((theme) => ({
    textL: {
        fontFamily: "Rationale",
        color: "#000",
    },
    container: {
        height: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        marginTop: 45,
        background: "#009A7E",
        textAlign: "center",
        fontFamily: "Rationale"
    },
    cont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    loadi:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    
}));

export default function Locked() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid item={true}>
                <Grid item={true} container className={classes.container}>
                    <Grid item={true} xs={12} className={classes.loadi}>
                        <div className={style.loaderContainer}>
                            <div className={style.loader}></div>
                            <div className={style.loader2}></div>
                        </div>
                    </Grid>
                    <Grid>
                        <Grid className={classes.loadi}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                className={classes.textL}
                            >
                            Cargando.......
                            </Typography>
                            </Grid>
                            <Typography
                                variant="h4"
                                gutterBottom
                                className={classes.textL}
                            >
                            Si la página continua de esta forma, entonces regrese a los temas.
                            </Typography>
                    </Grid>
                    <Grid item={true} xs={12} className={classes.cont}>
                    <Button className={classes.button} >
                        <Link href="/perfil">
                        <Typography
                                variant="h5"
                                gutterBottom
                                className={classes.textL}
                            >
                                Regrese a los temas
                            </Typography>
                        </Link>
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}