import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import styles from "@/styles/Main.module.css";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import logo from "../../public/images/headerLogro.png";
import logoT from "../../public/images/headerT.png";

const useStyles = makeStyles((theme) => ({
    cont1: {
        paddingLeft: "-10px",
        justifyContent: "center",
    },
    contI: {
        display: "flex",
        justifyContent: "center",
        paddingRight: 2
    },
    cont2: {
        paddingLeft: "-10px",
        justifyContent: "center",
        marginTop: 10,
        height: 150
    },
    title3: {
        display: "flex",
        justifyContent: "center",
        paddingRight: 3,
        marginTop: 10,
        height: 80
    },
    title: {
        background: "#113163",
        textAlign: "center",
        height: 135,
        color: "#fff",
    },
    title4: {
        textAlign: "center",
        height: 135,
        color: "#113163",
        background: "#fff"
    },
    
    text: {
        fontFamily: "Rationale"
    },

}));

export default function PPHeader() {
  const classes = useStyles();
    return (
    <React.Fragment>
        <CssBaseline />
            <Container className={styles.header}>
            <Grid className={styles.headerF}> 
            <Grid item={true} container spacing={0} className={classes.container}>
            <Grid container className={classes.cont1}>
                <Grid className={classes.contI}>
                    <Image
                    src={logo} 
                    height={170}
                    width={420}
                    />
                </Grid>
            </Grid>
                <Grid container className={classes.cont2}>
                <Grid item={true} xs={12} sm={6} className={classes.title3}>
                <Image
                    src={logoT} 
                    height={100}
                    width={340} 
                    />
                </Grid>
                </Grid>
                
            </Grid>
            </Grid>
            <Grid container className={classes.cont3}>
                <Grid item={true} xs={12} sm={6} className={classes.title}>
                    <Typography variant="h3" className={classes.text}>
                    Fundamentos de ciberseguridad
                    </Typography>
                </Grid>
                <Grid item={true} xs={12} sm={6} className={classes.title4}>
                    <Typography variant="h3" className={classes.text}>
                            de forma sencilla!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}
