import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from "next/router";
import Image from "next/image";
import "@fontsource/rationale";
import Content from "../api/content";
import defecto from "../../public/images/defecto.png";

const useStyles = makeStyles((theme) => ({   
    containerCont: {
        alignItems: "center",
        backgroundColor: "#113163",
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        border: "3px solid #000",
        borderRadius: 50,
        marginLeft:30,
        marginRight: 30,
    },
    contenido: {
        //height: "100%",
        alignItems: "center",
        backgroundColor: "#009A7E",
        borderRadius: 50,
        border: "3px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    text: {
        fontFamily: "Rationale",
        alignItems: "center",
        color: "#fff",
        [theme.breakpoints.up('xs')]: {
            fontSize: '4vw'
          },
          [theme.breakpoints.up('sm')]: {
              fontSize: '3vh'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '3.5vw'
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '3.5vh'
      }
    },
    img: {
        width: "100%",
        height: "100%",
        marginRight: 20,
        paddingBottom: 5,
        alignItems: "center"
    }
}));

const ConteComponente = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const [contentsTheme, setContentsTheme] = useState([]);
    const [contentImage, setContentImage] = useState(null);

    useEffect(() => {
        contentTheme();
      }, [id]);

      async function contentTheme() {
        try {
            const contentTh = await Content.content(id);
            let cImage = contentTh.data.image;
            setContentImage(cImage);
            setContentsTheme(contentTh.data);
        } catch(error){
    
        }
      }


  return (
        <Grid item={true} container className={classes.containerCont}>     
            <Grid>
            <Grid xs className={classes.img}>
                <Image
              src={contentImage ? contentImage : defecto}
              height={500}
              width={600}
              className={classes.imgT}
            />
            </Grid> 
            </Grid>
            <Grid xs className={classes.contenido}>
                <Typography variant="h6" gutterBottom className={classes.text}>
                {contentsTheme && contentsTheme.description}
                </Typography>
            </Grid>
            
        </Grid>
  );
};

export default ConteComponente;

