import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from "next/router";
import Image from "next/image";
import "@fontsource/rationale";
import Content from "../api/content";

const useStyles = makeStyles((theme) => ({   
    containerCont: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        //margin: "0 auto",
    },
    contenido: {
        //border: "1px solid #000000",
        height: 500,
        alignItems: "center",
        backgroundColor: "#009A7E"
    },
    text: {
        fontFamily: "Rationale",
        alignItems: "center",
        color: "#fff",
    },
    
}));

const ConteComponente = (props) => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const [contentsTheme, setContentsTheme] = useState([]);

    useEffect(() => {
        contentTheme();
      }, [id]);

      async function contentTheme() {
        try {
            const contentTh = await Content.content(id);
            setContentsTheme(contentTh.data);
        } catch(error){
    
        }
      }


  return (
        <Grid container className={classes.containerCont}>
            <Grid container item={true} xs={6} className={classes.img}>
                <Box>
                    
                </Box>
            </Grid>
            <Grid item xs={4} className={classes.contenido}>
                <Typography variant="h4" gutterBottom className={classes.text}>
                {contentsTheme && contentsTheme.description}
                </Typography>
            </Grid>
        </Grid>
  );
};

export default ConteComponente;