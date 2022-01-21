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
import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Ingrese un correo válido")
        .required("Este campo es obligatorio"),
    name: yup
        .string()
        .required("Este campo es obligatorio"),
    password: yup
        .string()
        .min(6, "Ingrese al menos 8 caracteres")
        .required("Este campo es obligatorio"),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Las claves no coinciden")
        .required("Este campo es obligatorio"),
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
        background: "#fff",
    },
    textfieldF: {
        color: "#113163",
        background: "#e3e3e4",
        fontFamily: "Rationale",
    },
    contr : {
        marginBottom: "-15px",
        marginTop: "-15px"
    },
    contr2 : {
        marginTop: "-28px"
    }
    
}));

const RegisterPage = () => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const [valuesR, setValuesR] = useState({
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
    const router = useRouter();
    const [errorsList, setErrorsList] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const { register } = useAuth();
    const classes = useStyles();

    const onSubmit = async (formData) => {
        setUserInfo(null);
        setResult("Enviando los datos...");
        try {
        const userData = {
            ...formData,
        };
        const response = await register(userData);
        setUserInfo(response.data);
        setResult("Usuario registrado correctamente");
        reset();
        router.push("/informacion");
        } catch (e) {
            const { response } = e;
            setResult("Ocurrió un error :(");
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

      const handleChangeR = (prop) => (event) => {
        setValuesR({ ...valuesR, [prop]: event.target.value });
      };
    
      const handleClickShowPasswordR = () => {
        setValuesR({
          ...valuesR,
          showPassword: !valuesR.showPassword,
        });
      };

      const handleMouseDownPasswordR = (event) => {
        event.preventDefault();
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  

    return (
        <Grid spacing={0} className={classes.fields}>
        <Typography variant="h4" gutterBottom className={classes.text}>
                Registro
            </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
            <Controller
                name="name"
                control={control}
                className={classes.controller}
                defaultValue=""
                render={({ field }) => (
                <TextField
                    {...field}
                    className={classes.textfield}
                    label="Nombre"
                    variant="filled"
                />
                )}
            />          
            <p style={{ color:"#ff0000" }}>{errors.name?.message}</p>
            </Grid>
            <Grid>
                <Controller
                    name="email"
                    control={control}
                    className={classes.controller}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField
                        {...field}
                        className={classes.textfield}
                        type="email"
                        label="Correo electrónico"
                        variant="filled"
                    />
                    )}
                />
                <p style={{ color:"#ff0000" }}>{errors.email?.message}</p>
            </Grid>
            <Grid className={classes.contr}>
            <Controller
                name="password"
                control={control}
                className={classes.controllerF}
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
            <p style={{ color:"#ff0000" }}>{errors.password?.message}</p>
            </Grid>
            <Grid className={classes.contr2}>

            <Controller
                name="password_confirmation"
                control={control}
                className={classes.controllerF}
                defaultValue=""
                render={({ field }) => (

                    <FormControl 
          {...field}
                sx={{ m: 2, width: '36ch' }}
                   variant="filled"
                   className={classes.textfieldF}
                >
          <InputLabel style={{ marginTop:"-5px" }}
          >Confirma tu contraseña</InputLabel>
          <OutlinedInput
            
            id="outlined-adornment-password"
            type={valuesR.showPassword ? 'text' : 'password'}
            value={valuesR.password}
            onChange={handleChangeR('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordR}
                  onMouseDown={handleMouseDownPasswordR}
                  edge="end"
                >
                  {valuesR.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirma tu contraseña"
          />
        </FormControl>

                
                )}
            />
            <p style={{ color:"#ff0000" }}>{errors.password_confirmation?.message}</p>
            </Grid>

            <p style={{ color:"#000" }}>{result}</p>


            {errorsList.length > 0 && (
            <ul>
                {errorsList.map((error) => (
                <li key={error}>{error}</li>
                ))}
            </ul>
            )}
            
            <Button 
            type="submit" 
            variant="outlined" 
            className={classes.button}
            >
                Registrarse 
            </Button>  
        </form>
        </Grid>
    );
};

export default RegisterPage;

/*
<TextField
                    {...field}
                    className={classes.textfield}
                    type="password"
                    label="Confirma tu contraseña"
                    variant="filled"
                    size="small"
                />

*/