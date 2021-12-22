import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        background: "#113163",
        height: 70,
        alignContent: "center",
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid container spacing={0} className={classes.header}>
            </Grid>
        </Container>
    </React.Fragment>
    );
}