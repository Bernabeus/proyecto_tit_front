import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from "next/image";
import "@fontsource/rationale";
import ruta1 from "../../../public/images/imagen6.jpg";

//const fetcher = (url) => api.get(url).then((res) => res.data);

const useStyles = makeStyles((theme) => ({   
    containerCont: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto"
    },
    img: {
        //display: "flex",
        //justifyContent: "center",
        //alignItems: "center"
    },
    contenido: {
        border: "1px solid #000000",
        height: 500,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    text: {
        fontFamily: "Rationale",
        alignItems: "center",
    },
    
}));

const ConteComponente = () => {

  return (
    <Grid container>
        <Grid container className={classes.containerCont}>
            <Grid container item={true} xs={6} className={classes.img}>
                <Box>
                    <Image src={ruta1} height={400} width={380} />
                </Box>
            </Grid>
            <Grid item xs={4} className={classes.contenido}>
                <Typography variant="h4" gutterBottom className={classes.text}>
                    Contenido
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default ConteComponente;
