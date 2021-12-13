import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Box from '@material-ui/core/Box';
import Image from "next/image";
import medalla from "../../../public/images/medalla.png";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#fff",
        border: "1px solid #000000",
    },
    contP: {
        backgroundColor: "#009A7E",
        border: "2px solid #000000",
        width: 1000,
        height: 400,
        borderRadius: 100,
        marginBottom: 60,
        marginTop: 60,
        marginLeft: 100,
        alignContent: "center"
    },
    contP1: {
        textAlign: "center",
        alignItems: "center"
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
        borderBottomLeftRadius: 59,
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
    accord: {
        backgroundColor: "#b6b6b6",
        marginBottom:40,
    },
    heading: {
        fontFamily: "Rationale",
        color: "#113163"
    }
}));

export default function PerfilBody() {
    const classes = useStyles();

    return (
    <React.Fragment>
        <CssBaseline />
            <Container >
            <Grid spacing={0} className={classes.container}>
                <Grid container className={classes.contP}>
                    <Grid containeritem xs={12} sm={6} className={classes.contP1}>
                        <Grid item xs={12} className={classes.boxP}>
                            <Box>
                                <Image
                                src={medalla} 
                                height={200}
                                width={200} 
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Nombre del maximo logro
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Nombre: 
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Experiencia:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Rango:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Nivel:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Progreso del curso: 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography variant="h3" className={classes.heading}>Básico</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            <Box className={classes.boxTema}>
                                <Grid className={classes.boxTemaTi}>
                                    <Typography variant="h4" gutterBottom className={classes.text}>
                                        Titulo
                                    </Typography>
                                </Grid>
                                <Grid className={classes.boxTemaTe}>
                                    <Typography variant="h4" gutterBottom className={classes.text}>
                                        Texto
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography variant="h3" className={classes.heading}>Intermedio</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            <Box className={classes.boxTema}>
                                <Grid className={classes.boxTemaTi}>
                                    <Typography variant="h4" gutterBottom className={classes.text}>
                                        Titulo
                                    </Typography>
                                </Grid>
                                <Grid className={classes.boxTemaTe}>
                                    <Typography variant="h4" gutterBottom className={classes.text}>
                                        Texto
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography variant="h3" className={classes.heading}>Avanzado</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            <Box className={classes.boxTema}>
                                <Grid className={classes.boxTemaTi}>
                                    <Typography variant="h4" gutterBottom className={classes.text}>
                                        Titulo
                                    </Typography>
                                </Grid>
                                <Grid className={classes.boxTemaTe}>
                                    <Typography variant="h4" gutterBottom className={classes.text}>
                                        Texto
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Container>
    </React.Fragment>
    );
}