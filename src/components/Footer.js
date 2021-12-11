import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        textAlign: "center",
        background: "#113163",
        color: "#fff"
    },
    cont: {
        marginTop: "20px"
    },
    text: {
        fontFamily: "Rationale",
    },
    icons: {
        width: "50px"
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid container spacing={0} className={classes.footer}>
                <Grid item xs={12} sm={6} className={classes.cont}>
                    <Typography variant="h3" gutterBottom className={classes.text}>
                        CONTÁCTANOS
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.cont}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Box>
                                <WhatsAppIcon className={classes.icons} fontSize="large" />
                                <FacebookIcon className={classes.icons} fontSize="large" />
                                <MailIcon className={classes.icons} fontSize="large" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom className={classes.text}>
                        Escuela de Formación de Tecnólogos - Escuela Politécnica Nacional
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}