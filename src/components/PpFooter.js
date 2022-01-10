import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { useAuth } from "@/contexts/auth";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";
import style from "@/styles/Main.module.css";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    cont: {
        marginTop: "20px",
        color: "#fff",
    },
    text: {
        fontFamily: "Rationale",
        color: "#fff",
    },
    icons: {
        width: "50px"
    }
}));

export default function Ppfooter() {
    const classes = useStyles();
    const { user } = useAuth();
    if (!user) {
        return (
            <React.Fragment>
            <CssBaseline />
                <Container>
                <Grid container spacing={0} className={style.footer}>
                    <Grid item={true} xs={12} sm={6} className={classes.cont}>
                        <Typography variant="h3" gutterBottom className={classes.text}>
                            CONTÁCTANOS
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} sm={6} className={classes.cont}>
                        <Grid container spacing={0}>
                            <Grid item={true} xs={12}>
                                <Box>
                                    <WhatsAppIcon className={classes.icons} fontSize="large" />
                                    <FacebookIcon className={classes.icons} fontSize="large" />
                                    <MailIcon className={classes.icons} fontSize="large" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12}>
                    <Typography variant="h4" gutterBottom className={classes.text}>
                        Escuela de Formación de Tecnólogos - Escuela Politécnica Nacional
                    </Typography>
                </Grid>
                </Grid>
                <Loading />
            </Container>
        </React.Fragment>
        );
    }
    return (
        <Footer />
    );
};
