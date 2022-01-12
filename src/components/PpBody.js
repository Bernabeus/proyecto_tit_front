import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from "next/image";
import ruta1 from "../../public/images/imagen1.jpg";
import ruta2 from "../../public/images/imagen7.jpg";
import ruta3 from "../../public/images/imagen2.jpg";
import ruta4 from "../../public/images/imagen4.jpg";
import ruta5 from "../../public/images/imagen5.jpg";
import Modal from "@material-ui/core/Modal";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Registro";

const useStyles = makeStyles((theme) => ({
    box: {
        background: "#113163",
        height: 10,
    },
    box2: {
        background: "#113163",
        height: 10,
        textAlign: "left",
    },
    box1: {
        marginTop: "80px",
        marginBottom: "80px",
    },
    buttons: {
        textAlign: "center",
        alignItems: "center",
        height:  250,
        borderTopColor: "#113163"
    },
    buttonIn: {
        fontFamily: "Rationale",
        fontSize: "30px",
        border: "3px solid #000000",
        textDecorationLine: "underline",
        color: "#113163"
    },
    buttonRe: {
        fontFamily: "Rationale",
        backgroundColor: "#113163",
        fontSize: "30px",
        textDecorationLine: "underline",
        border: "3px solid #000000"
    },
    Box1: {
        textAlign: "right",
    },
    img: {
        marginTop: "-10px",
        textAlign: "center"
    },
    img1: {
        textAlign: "center",
        background: "#E2E2E2"
    },
    Box4: {
        marginTop: "80px",
        marginBottom: "80px"
    },
    text1: {
        fontFamily: "Rationale",
        marginLeft: "80px",
        marginTop: "60px",
        color: "#113163"
    },
    text2: {
        fontFamily: "Rationale",
        marginTop: "20px",
        marginLeft: "60px",
        marginRight: "60px",
        textAlign: "justify"
    },
    container: {
        backgroundColor: "#fff",
        border: "1px solid #fff"
    },
    paper: {
        position: "absolute",
        width: 430,
        boxShadow: theme.shadows[5]
    }
}));


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const Ppbody = () => {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [openI, setOpenI] = React.useState(false);
    const [openR, setOpenR] = React.useState(false);
    
    const handleCloseI = () => {
        setOpenI(false);
    };

    const handleOpenI = () => {
        setOpenI(true);
    };

    const handleCloseR = () => {
        setOpenR(false);
    };

    const handleOpenR = () => {
        setOpenR(true);
    };

    const modIn = (
        <Grid style={modalStyle} className={classes.paper}>
            <LoginPage />
        </Grid>
    );

    const modRe = (
        <Grid style={modalStyle} className={classes.paper}>
            <RegisterPage />
        </Grid>
    );

    return (
    <React.Fragment>
        <CssBaseline />
            <Container >
            <Grid container spacing={0} className={classes.container}>
            <Grid xs={12}>
                        <Box className={classes.box2}></Box>
                    </Grid>
                <Grid container spacing={2} className={classes.buttons}>
                    <Grid item={true} xs={12} sm={6}>
                        <Button variant="outlined" color="primary" className={classes.buttonIn} onClick={handleOpenI}>
                            Iniciar Sesión
                        </Button>
                        <Modal
                        open={openI}
                        onClose={handleCloseI}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        {modIn}
                        </Modal>
                    </Grid>
                    <Grid item={true} xs={12} sm={6}>
                        <Button variant="contained" color="primary" className={classes.buttonRe} onClick={handleOpenR}>
                            Registrarse
                        </Button>
                        <Modal
                        open={openR}
                        onClose={handleCloseR}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        {modRe}
                        </Modal>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12}>
                        <Box className={classes.box2}></Box>
                    </Grid>
                <Grid item={true} xs={6}>
                    <Box className={classes.box}></Box>
                </Grid>
                <Grid container spacing={0} className={classes.box1}>
                    <Grid item={true} xs={12} sm={4}>
                        <Box className={classes.Box1}>
                            <Image
                            src={ruta4} 
                            height={350}
                            width={370} 
                            />
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} sm={4}>
                        <Box className={classes.Box}>
                            <Image
                            src={ruta2} 
                            height={351}
                            width={412} 
                            />
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} sm={4}>
                        <Box className={classes.Box2}>
                            <Image
                            src={ruta3} 
                            height={350}
                            width={370} 
                            />
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} className={classes.img}>
                        <Box className={classes.Box3}>
                            <Image
                            src={ruta1} 
                            height={350}
                            width={570} 
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12}>
                        <Box className={classes.box2}></Box>
                    </Grid>
                <Grid container spacing={0}>
                    <Grid item={true} xs={12} sm={6}></Grid>
                    <Grid item={true} xs={12} sm={6}>
                        <Box className={classes.box2}></Box>
                    </Grid>
                </Grid>
            <Grid container spacing={0}>
                <Grid item={true} xs={12} sm={6}>
                    <Typography variant="h2" gutterBottom className={classes.text1}>
                        NUESTRO CURSO
                    </Typography>
                </Grid>
                <Grid item={true} xs={12} sm={6}>
                    <Typography variant="h3" gutterBottom className={classes.text2}>
                        Es perfecto para obtener conocimientos sobre ciberseguridad
                        y mejora tu protección.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item={true} xs={12} className={classes.img1}>
                    <Box className={classes.Box4}>
                        <Image
                        src={ruta5} 
                        height={300}
                        width={900} 
                        />
                    </Box>
                </Grid>
            </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
};
export default Ppbody;
