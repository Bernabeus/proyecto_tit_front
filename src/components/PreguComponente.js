import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LensIcon from '@material-ui/icons/Lens';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import "@fontsource/rationale";

//const fetcher = (url) => api.get(url).then((res) => res.data);

const useStyles = makeStyles((theme) => ({
    containerPreg: {
        //display: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 30,
    },
    pregunta: {
        backgroundColor: "#009A7E"
    },
    respuesta: {
        backgroundColor: "#009A7E",
        marginTop: 100,
        fontFamily: "Rationale",
    },
    checkP: {
        color: "blue",
    },  
    text: {
        fontFamily: "Rationale",
        //alignitems: "center",
    },
}));

const PreguComponente = () => {
    const classes = useStyles();
  return (
    <Grid container>
        <Grid container className={classes.containerPreg}>
            <Grid item={true} xs={12} className={classes.pregunta}>
                <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.text}
                >
                    Pregunta:
                </Typography>
            <Grid item={true} xs={6} className={classes.pregunta}>
                <FormControlLabel
                control={
                    <Checkbox
                    icon={<PanoramaFishEyeIcon />}
                    checkedIcon={<LensIcon />}
                    className={classes.checkP}
                    />
                }
                label="Seleccion de pregunta"
                />
            </Grid>
            <Grid item={true} xs={6} className={classes.pregunta}>
                <Typography
                variant="h4"
                gutterBottom
                className={classes.text}
                >
                    Seleccion
                </Typography>
            </Grid>
            </Grid>
            <Grid item={true} xs={12} className={classes.respuesta}>
                <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.text}
                >
                    Respuesta:
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default PreguComponente;
