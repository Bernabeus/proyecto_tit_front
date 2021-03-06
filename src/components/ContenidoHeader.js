import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import ContentDetails from "../api/contentDetails";
import Theme from "../api/theme";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";


const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        background: "#113163",
        height: 100,
        alignContent: "center",
    },
    text: {
        fontFamily: "Rationale",
        color: "#fff",
    },
    button: {
        fontSize: 25,
        color: "#000",
        fontFamily: "Rationale",
      },
      icono: {
        color: "#fff"
    },
    grid: {
        marginTop: "-5px",
    }
}));

export default function ContenidoHeader() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [themeT, setthemeT] = useState(null);

    useEffect(() => {
        contentsDetailA()
      }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    async function contentsDetailA() {
        try{
            const contentDetail = await ContentDetails.contentsDetailsAll();
            themeInf(contentDetail.data[0].theme_id);
        }catch(error){
        }
    }

    async function themeInf(idTh) {
        try{
            const theme = await Theme.theme(idTh);
            console.log("tema", theme);
            setthemeT(theme);
        }catch(error){

        }
    }

    return (
        <React.Fragment>
        <CssBaseline />
            <Container>
            <Grid item={true} container spacing={0} className={classes.header}>
                <Grid item={true} xs={11} className={classes.container}>
                    <Typography variant="h3" gutterBottom className={classes.text}>
                    {themeT && themeT.data.title}
                    </Typography>
                </Grid>
                <Grid item={true} xs={1} className={classes.grid}>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        className={classes.icono}
                        onClick={handleClick}
                    >
                        <ArrowDropDownCircleRoundedIcon  style={{ fontSize: 45 }}/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link href="/">
                                <Typography variant="h5" gutterBottom className={classes.button}>
                                Regresar a la p??gina de temas
                                </Typography>       
                            </Link>
                        </MenuItem>
                    </Menu>
                    </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    );
}