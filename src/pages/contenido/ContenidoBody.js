import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#fff",
        border: "1px solid #000000",
    },
    cont1: {
        height: 900,
        backgroundColor: "#009A7E",
    },
    btnA: {
        float: "left",
        fontFamily: "Rationale",
    },
    btnS: {
        float: "right",
        fontFamily: "Rationale",
    },
    cont2: {
        height: 100,
    },
}));

const ContenidoBody = ({ onChangePage }) => {
    const classes = useStyles();

    return (
    <React.Fragment>
        <CssBaseline />
            <Container >
            <Grid spacing={0} className={classes.container}>
                <Grid container spacing={0} className={classes.cont1}>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => onChangePage()}  className={classes.btnA}>
                            Anterior
                        </Button>
                    </Grid> 
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => onChangePage()} className={classes.btnS}>
                            Siguiente
                        </Button>
                    </Grid>            
                </Grid>
                <Grid container className={classes.cont2}>

                <Grid spacing={0} className={classes.containerP}>

                </Grid> 
                </Grid> 
            </Grid>
        </Container>
    </React.Fragment>
    );
};

export default ContenidoBody;