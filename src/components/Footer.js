import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
    footer: {
        textAlign: "center",
        background: "#113163",
    },
    text: {
        fontFamily: "Rationale",
        color: "#fff",
    },
}));

export default function Ppfooter() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid container spacing={0} className={classes.footer}>
                <Grid item={true} xs={12}>
                    <Typography variant="h5" gutterBottom className={classes.text}>
                        Escuela de Formación de Tecnólogos - Escuela Politécnica Nacional
                    </Typography>
                </Grid>
            </Grid>
            <Loading />
        </Container>
    </React.Fragment>
    );
};
