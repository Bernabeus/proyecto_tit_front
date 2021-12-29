import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import "@fontsource/rationale";
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Theme from "../api/theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    accord: {
        backgroundColor: "#b6b6b6",
        marginBottom:40,
    },
    heading: {
        fontFamily: "Rationale",
        color: "#113163"
    },
    text: {
        fontFamily: "Rationale",
        color: "#fff"
    },
    boxTema: {
        width: 230,
        height: 300, 
        borderRadius: 70,
        border: "3px solid #000",
        textAlign: "center",
        marginTop: 30,
        marginLeft: 30,
        marginBottom: 30,
        borderTopLeftRadius: 59,
        borderTopRightRadius: 59,
        borderBottomRightRadius: 59,
        borderBottomLeftRadius: 59
    },
    boxTemaTi: {
        borderBottom: "3px solid #000",
        backgroundColor: "#009A7E",
        borderTopLeftRadius: 75,
        borderTopRightRadius: 75,
    },
    boxTemaTe: {
        backgroundColor: "#113163",
        height: 239,
        borderBottomRightRadius: 57,
        borderBottomLeftRadius: 57,
    },
}));

export default function PPHeader() {
  const classes = useStyles();
  const [ themeDiff, setThemeDiff ] = useState([]);  
  const [ theme, setTheme ] = useState([]);
  const [ themeB, setThemeB ] = useState([]);
  const [ themeI, setThemeI ] = useState([]);
  const [ themeA, setThemeA ] = useState([]);
  

  useEffect(() => {
    themeData();
}, [])


  async function themeData() {
    try {
        const themes = await Theme.themeAll();
        setTheme(themes.data);
        const themeBasic = [];
        const themeIntermediate = [];
        const themeAdvanced = [];
        const themeDiff = [];

        for(var i = 0; i <= (themes.data.length-1); i++){
            if(themes.data[i].difficulty=="Básico"){
                themeBasic.push(themes.data[i]);
            }
            if(themes.data[i].difficulty=="Intermedio"){
                themeIntermediate.push(themes.data[i]);
            }
            if(themes.data[i].difficulty=="Avanzado"){
                themeAdvanced.push(themes.data[i]);
            }
            themeDiff.push(themes.data[i].difficulty);
        };

        const dataDiff = new Set(themeDiff);
        let resultT = [...dataDiff];
        setThemeDiff(resultT);
        setThemeB(themeBasic);
        setThemeI(themeIntermediate);
        setThemeA(themeAdvanced);
        return themes;
      } catch (error) {
      }
    }

    return (
    <React.Fragment>
        <CssBaseline />
        {themeDiff.map((tema) => (
        <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography variant="h3" className={classes.heading}>{tema ? tema: ''}</Typography>
                    </AccordionSummary>
                    {tema === "Básico" ? 
                    <AccordionDetails>
                    {themeB.map((tem, index) => (
                        <Grid item={true}>      
                            <Box className={classes.boxTema}>
                                <Grid className={classes.boxTemaTi}>
                                    <Typography variant="h5" gutterBottom className={classes.text}>
                                        {tema}  {index+1}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.boxTemaTe}>
                                    <Typography variant="h5" gutterBottom className={classes.text}>
                                        {tem.title}
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                        ))}        
                    </AccordionDetails>
                    : ''}
                    {tema === "Intermedio" ? 
                    <AccordionDetails>
                    {themeI.map((tem, index) => (
                        <Grid item={true}>      
                        <Box className={classes.boxTema}>
                            <Grid className={classes.boxTemaTi}>
                                <Typography variant="h5" gutterBottom className={classes.text}>
                                    {tema} {index+1}
                                </Typography>
                            </Grid>
                            <Grid className={classes.boxTemaTe}>
                                <Typography variant="h5" gutterBottom className={classes.text}>
                                    {tem.title}
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                        ))}        
                    </AccordionDetails>
                    : ''}
                    {tema === "Avanzado" ? 
                    <AccordionDetails>
                    {themeA.map((tem, index) => (
                        <Grid item={true}>      
                        <Box className={classes.boxTema}>
                            <Grid className={classes.boxTemaTi}>
                                <Typography variant="h5" gutterBottom className={classes.text}>
                                    {tema} {index+1}
                                </Typography>
                            </Grid>
                            <Grid className={classes.boxTemaTe}>
                                <Typography variant="h5" gutterBottom className={classes.text}>
                                    {tem.title}
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                        ))}        
                    </AccordionDetails>
                    : ''}
                </Accordion>
                ))}
                
    </React.Fragment>
    );
}
