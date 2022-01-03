import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/contexts/auth";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Typography from '@material-ui/core/Typography';
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

const useStyles = makeStyles((theme) => ({
  grid: {
    alignContent: "right",
    alignItems: "right",
  },
  
  button: {
    fontSize: 25,
    color: "#113163",
    fontFamily: "Rationale",
    
  },
  icono: {
    color: "#fff"
},
textL: {
  fontFamily: "Rationale",
}
}));

const Logout = () => {
  const classes = useStyles();
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  const handleLogout = () => {
    logout();
  };


  return (
    <Grid className={classes.grid}> 
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
          <Button className={classes.button} >
          <Link href="/informacion">
          <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.textL}
                  >
                    Información del curso
                  </Typography>
            </Link>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button className={classes.button} onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </MenuItem>
      </Menu>
    </Grid>
  );
};

export default Logout;
