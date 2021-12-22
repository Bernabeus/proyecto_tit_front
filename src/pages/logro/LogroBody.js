import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Link from "next/link";
import Typography from '@material-ui/core/Typography';
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

const LogroBody = () => {
    const classes = useStyles();

    return (
    <React.Fragment>
        <CssBaseline />
            <Grid spacing={0} className={classes.container}>
                <Grid container spacing={0} className={classes.cont1}>
                    <Grid>
                        <Typography variant="h6" gutterBottom className={classes.button}>
                            Felicitaciones has aprobado el tema de  
                        </Typography>
                    </Grid> 
                    <Grid>
                        
                    </Grid> 
                    <Grid className={classes.contText}>
                        <Typography variant="h5" gutterBottom className={classes.text}>
                            Ahora sabes:
                        </Typography>
                        <Typography variant="h5" gutterBottom className={classes.text}>
                            Regresar a la página de temas
                        </Typography>
                    </Grid>    
                    <Grid className={classes.contButton}>
                        <Button variant="contained" className={classes.btnS}>
                            <Link href="/">
                                <Typography variant="h5" gutterBottom className={classes.textB}>
                                Regresar a la página de temas
                                </Typography>       
                            </Link>
                        </Button>
                    </Grid>         
                </Grid>
            </Grid>
    </React.Fragment>
    );
};

export default LogroBody;