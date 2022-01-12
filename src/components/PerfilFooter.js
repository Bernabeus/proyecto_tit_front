import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import style from "@/styles/Main.module.css";

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: "Rationale",
        color: "#fff",
    },
    container: {
        borderRight: "1px solid #fff",
        borderLeft: "1px solid #fff",
    }

}));

export default function PerfilFooter() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid container spacing={0} className={style.footer}>
                <Grid item xs={12} className={classes.container}>
                    <Typography variant="h5" gutterBottom className={classes.text}>
                        Escuela de Formación de Tecnólogos - Escuela Politécnica Nacional
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}