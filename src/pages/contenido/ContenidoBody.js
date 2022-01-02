import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ConteComponente from "@/components/ConteComponente";
import PreguComponente from "@/components/PreguComponente";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#fff",
        border: "1px solid #000000",
        backgroundColor: "#009A7E",
    },
    cont1: {
        height: 700,
    },
    btnA: {
        float: "left",
        fontFamily: "Rationale",
    },
    btnS: {
        fontFamily: "Rationale",
    },
    buttonS: {
        float: "right",
        marginTop: 10,
        marginRight: 10,
    },
    buttons: {
        
    },
    buttonA: {
        marginTop: 10,
        marginLeft: 10,
    },
    cont2: {
        height: 100,
    },
    text: {
        marginTop: 20,
        fontFamily: "Rationale",
        textAlign: "center",
        color: "#fff",
    },
    seccion: {
        justifyContent: "center",
    }
}));

const ContenidoBody = () => {
    const classes = useStyles();
    const [stateComponent, setStateComponent] = useState(1);
    const [contentShow, setContentShow] = useState(null);


    const handleChangeContent = (content) => { 
        setContentShow(content);
    }

    const handleChangeComponent = (state) => {
        setStateComponent(state);
    }

    return (
    <React.Fragment>
        <CssBaseline />
            <Container >
                {stateComponent === 1 ? 
                <Grid spacing={0} className={classes.container}>
                <Grid spacing={0} className={classes.cont1}>
                    <Grid>
                    <Grid className={classes.buttonS}>
                        <Button variant="contained" onClick={() =>  handleChangeComponent(2) } className={classes.btnS}>
                            Siguiente
                        </Button>
                    </Grid>  
                    </Grid> 
                    <Grid container className={classes.seccion}>
                        <Typography variant="h4" gutterBottom className={classes.text}>
                            SECCION DEL CONTENIDO
                        </Typography>    
                    </Grid> 
                    <Grid container>
                         <ConteComponente onChangeUser={handleChangeContent} />         
                    </Grid>
                </Grid>
            </Grid>: 
            <Grid spacing={0} className={classes.container}>
            <Grid spacing={0} className={classes.cont1}>
            <Grid>
                <Grid  className={classes.buttonA}>
                    <Button  variant="contained" onClick={() =>  handleChangeComponent(1) }  className={classes.btnA}>
                        Anterior
                    </Button>
                </Grid>   
                </Grid> 
                <Grid container className={classes.seccion}>
                        <Typography variant="h4" gutterBottom className={classes.text}>
                            SECCION DE LA PREGUNTA
                        </Typography>    
                    </Grid>  
                <Grid container>
                    <PreguComponente onChangeUser={handleChangeContent} />     
                </Grid>
            </Grid>
        </Grid>       
    }    
        </Container>
    </React.Fragment>
    );
};

export default ContenidoBody;