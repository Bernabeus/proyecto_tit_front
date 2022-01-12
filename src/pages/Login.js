import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '@material-ui/core/Button';
import "@fontsource/rationale";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/router";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const schema = yup.object().shape({
    email: yup.string().email("Ingrese un correo válido")
    .required("Este campo obligatorio"),
    password: yup.string().required("Este campo obligatorio"),
});

const useStyles = makeStyles((theme) => ({
    fields: {
        textAlign: "center",
        background: "#113163",
        border: "2px solid #000000",
    },
    button: {
        fontFamily: "Rationale",
        fontSize: "25px",
        border: "1px solid #fff",
        background: "#000",
        color: "#fff",
        borderRadius: 40,
        marginBottom: 18,
        marginTop: 10
    },
    text: {
      fontFamily: "Rationale",
      color: "#fff",
      marginBottom: 18,
      marginTop: 18
    },
    textfield: {
        color: "#113163",
        background: "#e3e3e4",
        fontFamily: "Rationale",
    },
    textfield: {
      color: "#113163",
      background: "#fff",
      fontFamily: "Rationale",
  },
  textfieldF: {
    color: "#113163",
    background: "#e3e3e4",
    fontFamily: "Rationale",
}
}));

const LoginPage = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
    const [result, setResult] = useState("");
    const [errorsList, setErrorsList] = useState([]);
    const { login } = useAuth();
    const router = useRouter();
    const classes = useStyles();
    

    const onFinishLog = async (formData) => {
      try {
        const userData = {
          ...formData,
        };
        const response = await login(userData);
        setResult("Usuario logueado");
        reset();
        router.push("/perfil");
      } catch (e) {
        const { response } = e;
        setResult("Ocurrio un error, contraseña o email no ingresados incorrectamente");
  
        if (response) {
          if (response.data.errors) {
            const errors = response.data.errors;
            const newErrorList = [];
  
            for (let field in errors) {
              newErrorList.push(...errors[field]);
            }
            setErrorsList(newErrorList);
          }
        }
      }
    };
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <Grid className={classes.fields}>
            <Typography variant="h4" gutterBottom className={classes.text}>
                Inicio Sesión
            </Typography>
        <form
            onSubmit={handleSubmit(onFinishLog)}
            className={classes.formplace}
          >
            <Grid>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={classes.textfield}
                    label="Correo electrónico"
                    variant="filled"
                    type="email"
                  />
                )}
              />
              <p style={{ color:"#fff" }}> {errors.email?.message}</p>
            </Grid>
                <Grid>
                
                </Grid>
            <Grid>
              <Controller variant="outlined"
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    

          <FormControl 
          {...field}
                sx={{ m: 2, width: '36ch' }}
                   variant="filled"
                   className={classes.textfieldF}
                >
          <InputLabel style={{ marginTop:"-5px" }}
          >Contraseña</InputLabel>
          <OutlinedInput
            
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Contraseña"
          />
        </FormControl>
                   
                )}
              />
              <p style={{ color:"#fff" }}>{errors.password?.message}</p>
            </Grid>
            <p  style={{ color:"#fff" }}>{result}</p>
            {errorsList.length > 0 && (
            <ul>
                {errorsList.map((error) => (
                <li key={error}>{error}</li>
                ))}
            </ul>
            )}
            <Grid>
              <Button type="submit" variant="outlined" className={classes.button}>
                Iniciar Sesión
              </Button>
            </Grid>
          </form>
        </Grid>
    );
};

export default LoginPage;
