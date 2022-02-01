import Container from "@material-ui/core/Container";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Logout from "@/components/Logout";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import logo from "../../public/images/logo1.png";

const useStyles = makeStyles((theme) => ({
    header: {
        alignItems: "center",
        background: "#113163",
        height: 140,
    },
    img: {
        marginTop: "-15px",
    }
}));

export default function PerfilHeader() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid item={true} container spacing={0} className={classes.header}>
                <Grid item={true} xs={5}>

                </Grid>
                <Grid item={true} xs={3} className={classes.img}> 
                <Image
                    src={logo} 
                    height={170}
                    width={170} 
                    /></Grid>
                <Grid item={true} xs={2} >
                    
                </Grid>
                
                <Grid item={true} xs={2}><Logout /></Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}