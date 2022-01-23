import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: "Rationale",
        color: "#000",
    },
    container: {
        height: 900,
        backgroundColor: "#B7B1B1",
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
                    <Grid item={true} xs={12} >
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