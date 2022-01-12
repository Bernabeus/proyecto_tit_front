import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import styles from "@/styles/Main.module.css";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import logo from "../../public/images/logo2.png";
import logo1 from "../../public/images/logo3.png";

const useStyles = makeStyles((theme) => ({
    title: {
        background: "#113163",
        textAlign: "center",
        height: 135,
        color: "#fff",
    },
    title2: {
        textAlign: "left",
        height: 120,
        color: "#113163"
    },
    titleO: {
        textAlign: "left",
        height: 160,
        color: "#113163"
    },
    titleL: {
        float: "rigth",
        background: "#113163",
        height: 160
    },
    title1: {
        textAlign: "right",
        color: "#fff",
        fontFamily: "Rationale"
    },
    title3: {
        background: "#113163",
        height: 120
    },
    title4: {
        textAlign: "center",
        height: 100,
        color: "#113163",
        marginBottom: "35px",
    },
    container: {
        backgroundColor: "#fff",
        border: "1px solid #fff"
    },
    text: {
        fontFamily: "Rationale"
    },
    img: {
        textAlign: "right"
    },
    img1: {
        marginTop: "-6px"
    }
}));

export default function PPHeader() {
  const classes = useStyles();

    return (
    <React.Fragment>
        <CssBaseline />
            <Container className={styles.header}>
            <Grid container spacing={0} className={classes.container}>
                <Grid item={true} xs={12} sm={6} className={classes.titleL}>
                    <Grid className={classes.img}>
                <Image
                    src={logo} 
                    height={160}
                    width={175} 
                    />
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} sm={6} className={classes.titleO}>
                <Grid className={classes.img1}>
                    <Image
                    src={logo1} 
                    height={180}
                    width={160} 
                    />
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} sm={6} className={classes.title3}>
                    <Typography variant="h3" className={classes.title1}>
                        Apre
                    </Typography>
                </Grid>
                <Grid item={true} xs={12} sm={6} className={classes.title2}>
                    <Typography variant="h3" className={classes.text}>
                        nde!
                    </Typography>
                </Grid>
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
