import React, { useEffect, useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "@fontsource/rationale";
import Box from '@material-ui/core/Box';
import Image from "next/image";
import medalla from "../../../public/images/medalla.png";
import defecto from "../../../public/images/defecto.png";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/contexts/auth";
import User from "../../api/user";
import Themes from "@/components/ThemeComponent.js";
import LinearProgress from '@material-ui/core/LinearProgress';
import AchievementDetails from "src/api/achievementDetails";
import Achievements from "src/api/achievement";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#fff",
        border: "1px solid #000000",
    },
    contP2: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10
    },
    contP: {
        backgroundColor: "#009A7E",
        border: "2px solid #000000",
        borderRadius: 100,
        width: "100%",
        alignContent: "center",
        textAlign: "center",
    },
    text: {
        fontFamily: "Rationale",
        color: "#fff",
        [theme.breakpoints.up('xs')]: {
            fontSize: '3vh'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '4vw'
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2.5vw'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '2.5vw'
    }
    },
    boxP: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    progr: {
        backgroundColor: "#fff",
        height: 20
    }
}));

export default function PerfilBody() {
    const classes = useStyles();
    const { user } = useAuth();
    const [ userI, setUserI ] = useState([]);
    const [ achievementEx, setAchievementEx ] = useState([]);
    const [achiImage, setAchiImage] = useState(null);

    useEffect(() => {
        getAuthenticatedUser();
        
    }, []);

    async function AchiAll(){
        try{
            const achievement = await AchievementDetails.achievementsDetailsAll();
            AchievementInf(achievement.data[0]);
            setAchievementEx(achievement.data.length);
        }
        catch(error){
            console.log("");
        }
    }

    async function AchievementInf(dataAch) {
        try{
            const achievementI = await Achievements.achievement(dataAch.achievement_id);
            let aImage = achievementI.data.image;
            setAchiImage(aImage);
        }catch(error){
            console.log("");
        }
    }

    async function getAuthenticatedUser() {
        try {
          const response = await User.getAuthenticatedUser();
          AchiAll();
          setUserI(response.data);
          return response;
        } catch (error) {
            console.log("");
        }
    }

    return (
    <React.Fragment>
        <CssBaseline />
            <Container >
            <Grid item={true} className={classes.container}>
                <Grid item={true} className={classes.cont1} style={{ marginLeft: '35px', marginRight: '35px', marginTop: '35px', marginBottom: '35px' }}>
                <Grid item={true} container className={classes.contP}>

                <Grid item={true} xs className={classes.contP2}>
                        <Grid item={true} xs={12}>
                            <Typography gutterBottom className={classes.text}>
                                Nombre: {user && user.name}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} className={classes.text23}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Experiencia: 
                                <LinearProgress variant="determinate" color="secondary" className={classes.progr} value={userI ? userI.experience: ''} ></LinearProgress>
                            </Typography>
                            
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Rango: {userI ? userI.rank: ''}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Nivel: {userI ? userI.level: ''}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4" gutterBottom className={classes.text}>
                                Progreso del curso: {userI ? userI.progress: '' }%
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item={true} container className={classes.contP1}>
                        <Grid item={true} xs={12} className={classes.boxP}>
                            {achievementEx != 0 ? (
                                 <Box>
                                   <Image
                                    src={achiImage ? achiImage: defecto} 
                                    height={250}
                                    width={250} />
                                </Box>
                            ): (
                                <Box>
                                <Image
                                src={medalla} 
                                height={250}
                                width={250} 
                                />
                                </Box>
                            )
                            } 
                        </Grid>
                    </Grid>
                    
                    </Grid>
                </Grid>
                <Themes />
            </Grid>
        </Container>
    </React.Fragment>
    );
};

/*
 
                                    />*/
