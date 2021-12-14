import React from "react";
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
        margin: "0 auto"
    },
    pregunta: {
        backgroundColor: "#fff"
    },
    respuesta: {
        backgroundColor: "#fff"
    },
    checkP: {
        color: "blue",
    },  
    preguntatext: {
        fontFamily: "Rationale",
        //alignItems: "center",
    },
}));

const PreguComponente = () => {
  return (
    <Grid container>
        <Grid container className={classes.containerPreg}>
            <Grid item xs={12} className={classes.pregunta}>
                <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.preguntatext}
                >
                    Pregunta:
                </Typography>
            <Grid item xs={6} className={classes.pregunta}>
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
            <Grid item xs={6} className={classes.pregunta}>
                <Typography
                variant="h4"
                gutterBottom
                className={classes.preguntatext}
                >
                    Seleccion
                </Typography>
            </Grid>
            </Grid>
            <Grid item xs={12} className={classes.respuesta}>
                <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.respuestatext}
                >
                    Respuesta:
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default PreguComponente;
