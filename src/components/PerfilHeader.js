import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Logout from "@/components/Logout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        alignItems: "center",
        background: "#113163",
        height: 80,
    }
}));

export default function PerfilHeader() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid container spacing={0} className={classes.header}>
                <Grid xs={1}></Grid>
                <Grid xs={10}></Grid>
                <Grid xs={1}><Logout /></Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}