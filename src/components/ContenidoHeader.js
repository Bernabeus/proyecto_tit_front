import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        background: "#113163",
        height: 100,
        alignContent: "center",
        
    },
    text: {
        fontFamily: "Rationale",
        color: "#fff",
    },
}));

export default function ContenidoHeader() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid container spacing={0} className={classes.header}>
                <Grid item xs={12} className={classes.container}>
                    <Typography variant="h3" gutterBottom className={classes.text}>
                        Titulo del contenido
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}