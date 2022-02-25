import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '@fontsource/rationale';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ConteComponente from '@/components/ConteComponente';
import PreguComponente from '@/components/PreguComponente';
import Footer from '@/components/PerfilFooter.js';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Link from 'next/link';
import MenuItem from '@material-ui/core/MenuItem';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import Theme from '../../api/theme';
import Content from '../../api/content.js';
import style from '@/styles/Main.module.css';
import ContentDetails from '../../api/contentDetails';
import ThemeDetails from 'src/api/themeDetails';
import Locked from '@/components/Locked';
import User from '../../api/user';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';

const useStyles = makeStyles((theme) => ({
  headerH: {
    textAlign: 'center',
    background: '#113163',
    alignContent: 'center',
    border: '1px solid #fff',
  },
  textH: {
    fontFamily: 'Rationale',
    color: '#fff',
    [theme.breakpoints.up('xs')]: {
      fontSize: '7vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4vw',
    },
  },
  containerH: {
    marginTop: 50,
  },
  buttonH: {
    fontSize: 25,
    color: '#000',
    fontFamily: 'Rationale',
  },
  iconoH: {
    color: '#fff',
  },
  gridH: {
    marginTop: 40,
  },
  container: {
    border: '1px solid #fff',
    backgroundColor: '#009A7E',
  },
  cont1: {
    height: '100%',
    marginBottom: 30,
  },
  btnA: {
    float: 'left',
    fontFamily: 'Rationale',
    [theme.breakpoints.up('xs')]: {
      fontSize: '4vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vw',
    },
  },
  btnS: {
    fontFamily: 'Rationale',
    [theme.breakpoints.up('xs')]: {
      fontSize: '4vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vw',
    },
  },
  buttonS: {
    float: 'right',
    marginTop: 10,
    marginRight: 10,
  },
  buttonA: {
    marginTop: 10,
    marginLeft: 10,
  },
  cont2: {
    height: 100,
  },
  seccion: {
    justifyContent: 'center',
  },
  containerPregunta: {
    height: '100%',
    marginBottom: 50,
  },
}));

export default function contentPage() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [stateComponent, setStateComponent] = useState(1);
  const [contentDetailA, setContentDetailA] = useState([]);
  const [themeT, setThemeT] = useState(null);
  const [contTheme, setContTheme] = useState([]);
  const [lockedContent, setLockedContent] = useState(false);

  useEffect(() => {
    getAuthenticatedUser();
  }, [id]);

  useEffect(() => {}, [contTheme]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeComponent = (state) => {
    setStateComponent(state);
  };

  async function contentsDetailA() {
    const contentDetail = await ContentDetails.contentsDetailsAll();
    contentNow(contentDetail.data[0].id);
  }

  function contentNow(idC) {
    const content = ContentDetails.update(idC, contentDetailA);
  }

  async function getAuthenticatedUser() {
    try {
      const response = await User.getAuthenticatedUser();
      contentTheme(response.data);
    } catch (error) {
      console.log();
    }
  }

  async function contentTheme(user) {
    try {
      const contTheme = await Content.content(id);
      themeDetailA(contTheme.data.theme_id, user);
      setContTheme(contTheme.data);
    } catch (error) {
      console.log();
    }
  }

  async function themeDetailA(idT, user) {
    try {
      const themeS = await ThemeDetails.themeDetailsAll();
      const arrayTheme = themeS.data.sort(function (a, b) {
        if (a.theme_id > b.theme_id) {
          return 1;
        }
        if (a.theme_id < b.theme_id) {
          return -1;
        }
        return 0;
      });

      if (user.experience == 0 && id == 1) {
        setLockedContent(true);
      } else if (user.experience == 2 && id == 2) {
        setLockedContent(true);
      } else if (user.experience == 4 && id == 3) {
        setLockedContent(true);
      } else if (user.experience == 6 && id == 4) {
        setLockedContent(true);
      } else if (user.experience == 18 && id == 5) {
        setLockedContent(true);
      } else if (user.experience == 20 && id == 6) {
        setLockedContent(true);
      } else if (user.experience == 22 && id == 7) {
        setLockedContent(true);
      } else if (user.experience == 24 && id == 8) {
        setLockedContent(true);
      } else if (user.experience == 26 && id == 9) {
        setLockedContent(true);
      } else if (user.experience == 34 && id == 10) {
        setLockedContent(true);
      } else if (user.experience == 36 && id == 11) {
        setLockedContent(true);
      } else if (user.experience == 38 && id == 12) {
        setLockedContent(true);
      } else if (user.experience == 40 && id == 13) {
        setLockedContent(true);
      } else if (user.experience == 50 && id == 14) {
        setLockedContent(true);
      } else if (user.experience == 52 && id == 15) {
        setLockedContent(true);
      } else if (user.experience == 54 && id == 16) {
        setLockedContent(true);
      } else if (user.experience == 66 && id == 17) {
        setLockedContent(true);
      } else if (user.experience == 68 && id == 18) {
        setLockedContent(true);
      } else if (user.experience == 70 && id == 19) {
        setLockedContent(true);
      } else if (user.experience == 82 && id == 20) {
        setLockedContent(true);
      } else if (user.experience == 84 && id == 21) {
        setLockedContent(true);
      } else if (user.experience == 86 && id == 22) {
        setLockedContent(true);
      } else if (user.experience == 88 && id == 23) {
        setLockedContent(true);
      }

      themeInf(idT);
      return arrayTheme;
    } catch (error) {
      console.log();
    }
  }

  async function themeInf(idT) {
    try {
      const theme = await Theme.theme(idT);
      setThemeT(theme.data);
      const data = {
        content_id: id,
        theme_id: theme.data.id,
      };
      setContentDetailA(data);
      return theme;
    } catch (error) {
      console.log();
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={style.container}>
        <Container>
          {lockedContent == true ? (
            <Grid item={true}>
              <Grid item={true} container className={classes.headerH}>
                <Grid item={true} xs={2} className={classes.img}>
                  <Image src={logo} height={160} width={160} />
                </Grid>
                <Grid item={true} xs={8} className={classes.containerH}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.textH}
                  >
                    {themeT && themeT.title}
                  </Typography>
                </Grid>
                <Grid item={true} xs={2} className={classes.gridH}>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    className={classes.iconoH}
                    onClick={handleClick}
                  >
                    <ArrowDropDownCircleRoundedIcon style={{ fontSize: 45 }} />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link href="/perfil">
                        <Button>
                          <Typography
                            variant="h5"
                            gutterBottom
                            className={classes.buttonH}
                            onClick={() => contentsDetailA()}
                          >
                            Regresar a la página de temas
                          </Typography>
                        </Button>
                      </Link>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
              {stateComponent === 1 ? (
                <Grid item={true} className={classes.container}>
                  <Grid item={true} className={classes.cont1}>
                    <Grid item={true}>
                      <Grid item={true} className={classes.buttonS}>
                        <Button
                          variant="contained"
                          onClick={() => handleChangeComponent(2)}
                          className={classes.btnS}
                        >
                          Siguiente
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item={true} container className={classes.seccion}>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.textH}
                      >
                        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                        Sección del contenido
                      </Typography>
                    </Grid>
                    <Grid item={true} container>
                      <ConteComponente />
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid item={true} className={classes.container}>
                  <Grid item={true} className={classes.containerPregunta}>
                    <Grid item={true}>
                      <Grid item={true} className={classes.buttonA}>
                        <Button
                          variant="contained"
                          onClick={() => handleChangeComponent(1)}
                          className={classes.btnA}
                        >
                          Anterior
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item={true} container className={classes.seccion}>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.textH}
                      >
                        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                        Sección de la pregunta
                      </Typography>
                    </Grid>
                    <Grid item={true} container>
                      <PreguComponente />
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          ) : (
            <Grid item={true}>
              <Grid item={true} container className={classes.headerH}>
                <Grid item={true} xs={2} className={classes.img}>
                  <Image src={logo} height={160} width={160} />
                </Grid>
                <Grid item={true} xs={10} className={classes.containerH}></Grid>
              </Grid>
              <Locked />
            </Grid>
          )}
        </Container>
        <Footer />
      </div>
    </React.Fragment>
  );
}
