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
const url = "http://localhost:8000/storage";

const useStyles = makeStyles((theme) => ({   
    containerCont: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    contenido: {
        height: 500,
        alignItems: "center",
        backgroundColor: "#009A7E"
    },
    text: {
        fontFamily: "Rationale",
        alignItems: "center",
        color: "#fff",
    },
    img: {
        width: "100%"
    }
}));

const ConteComponente = (props) => {
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
            let imgUrl = cImage.slice(1);
            imgUrl = imgUrl.slice(1);
            imgUrl = imgUrl.slice(1);
            imgUrl = imgUrl.slice(1);
            imgUrl = imgUrl.slice(1);
            imgUrl = imgUrl.slice(1);
            setContentImage(url + imgUrl);
            setContentsTheme(contentTh.data);
        } catch(error){
    
        }
      }


  return (
        <Grid container className={classes.containerCont}>
            <Grid container item={true} xs={6} className={classes.img}>
                <Box>
                <Image
              src={contentImage ? contentImage : defecto}
              height={500}
              width={600}
              className={classes.imgT}
            />
                </Box>
            </Grid>
            <Grid item xs={4} className={classes.contenido}>
                <Typography variant="h5" gutterBottom className={classes.text}>
                {contentsTheme && contentsTheme.description}
                </Typography>
            </Grid>
        </Grid>
  );
};

export default ConteComponente;