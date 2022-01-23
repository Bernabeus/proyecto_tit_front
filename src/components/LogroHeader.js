import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import logo from "../../public/images/logo1.png";

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        background: "#113163",
        height: 160,
        alignContent: "center",
        border: "1px solid #fff",
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid item={true} container spacing={0} className={classes.header}>
                <Grid item={true} xs={5}></Grid>
                <Grid item={true} xs={2}>
                <Image
                    src={logo} 
                    height={150}
                    width={160} 
                    />
                </Grid>
                <Grid item={true} xs={5}></Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}