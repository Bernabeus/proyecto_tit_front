import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LensIcon from '@material-ui/icons/Lens';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import "@fontsource/rationale";
import { useRouter } from "next/router";
import Content from "../api/content";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    containerPreg: {
        //display: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 30,
        width: "100%"
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
        color: "#113163",
        marginLeft: 150
    },  
    text: {
        fontFamily: "Rationale",
        color: "#fff"
        //alignitems: "center",
    },
    btnC: {
        background: "#000",
        textAlign: "center",
        width: 150,
        fontFamily: "Rationale",
    },
    link:{
        marginRigth: 100
    },
    textB: {
        fontFamily: "Rationale",
    },
    btn:{
        marginTop: 20,
    }
}));

const PreguComponente = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const [contentsTheme, setContentsTheme] = useState(null);
    console.log("contenido", contentsTheme);
    useEffect(() => {
        contentTheme();
      }, [id]);

      async function contentTheme() {
        try {
            const contentTh = await Content.contentTheme(id);
            setContentsTheme(contentTh.data[0]);
        } catch(error){
    
        }
      }

  return (
    <Grid container>
        <Grid container className={classes.containerPreg}>
            <Grid item={true} xs={12} className={classes.pregunta}>
                <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.text}
                >
                    Pregunta: {contentsTheme && contentsTheme.question} 
                </Typography>

                <Grid className={classes.list}>
                <List className={classes.listT}>
                  <ListItem > 
                    <ListItemText>
                    {<FormControlLabel
                control={
                    <Checkbox
                    icon={<PanoramaFishEyeIcon />}
                    checkedIcon={<LensIcon />}
                    className={classes.checkP}
                    />
                }
                label={<Typography
                    variant="h5"
                    gutterBottom
                    className={classes.text}
                    >
                        {contentsTheme && contentsTheme.answer_1}
                    </Typography>}
                />}
                    </ListItemText>
                  </ListItem>
                  <ListItem > 
                    <ListItemText>
                    {<FormControlLabel
                control={
                    <Checkbox
                    icon={<PanoramaFishEyeIcon />}
                    checkedIcon={<LensIcon />}
                    className={classes.checkP}
                    />
                }
                label={<Typography
                    variant="h5"
                    gutterBottom
                    className={classes.text}
                    >
                        {contentsTheme && contentsTheme.answer_2}
                    </Typography>}
                />}
                    </ListItemText>
                  </ListItem>
                  <ListItem > 
                    <ListItemText>
                    {<FormControlLabel
                control={
                    <Checkbox
                    icon={<PanoramaFishEyeIcon />}
                    checkedIcon={<LensIcon />}
                    className={classes.checkP}
                    />
                }
                label={<Typography
                    variant="h5"
                    gutterBottom
                    className={classes.text}
                    >
                        {contentsTheme && contentsTheme.answer_3}
                    </Typography>}
                />}
                    </ListItemText>
                  </ListItem>
                  <ListItem > 
                    <ListItemText>
                    {<FormControlLabel
                control={
                    <Checkbox
                    icon={<PanoramaFishEyeIcon />}
                    checkedIcon={<LensIcon />}
                    className={classes.checkP}
                    />
                }
                label={
                    <Typography
                variant="h5"
                gutterBottom
                className={classes.text}
                >
                    {contentsTheme && contentsTheme.answer_4}
                </Typography>
                    }
                />}
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            <Grid item={true} xs={6} className={classes.pregunta}>
                <Button variant="contained" className={classes.btn}>
                        <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.textB}
                        >
                            Seleccionar respuesta
                        </Typography>
                    </Button>
            </Grid>
            </Grid>
            <Grid item={true} xs={12} className={classes.respuesta}>
                <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.text}
                >
                    Respuesta: {contentsTheme && contentsTheme.feedback}
                </Typography>
                <Grid>
                <Link href={`/logro/${id}`}>
                    <Button variant="contained" className={classes.btnC}>
                        <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.text}
                        >
                            Siguiente Contenido
                        </Typography>
                    </Button>
                </Link>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default PreguComponente;
