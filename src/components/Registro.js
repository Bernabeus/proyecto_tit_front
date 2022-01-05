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
import withoutAuth from "../hocs/withoutAuth";
import { makeStyles } from "@material-ui/core/styles";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Ingrese un correo válido")
        .required("Este campo obligatorio"),
    name: yup
        .string()
        .required("Este campo obligatorio"),
    password: yup
        .string()
        .min(6, "Ingrese al menos 8 caracteres")
        .required("Este campo obligatorio"),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Las claves no coinciden")
        .required("Este campo obligatorio"),
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
    controller: {

    }
    
}));

const RegisterPage = () => {
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

    return (
        <Grid className={classes.fields}>
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
                    variant="outlined"
                    size="small"
                />
                )}
            />          
            <p style={{ color:"#fff" }}>{errors.name?.message}</p>
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
                        variant="outlined"
                        size="small"
                    />
                    )}
                />
                <p style={{ color:"#fff" }}>{errors.email?.message}</p>
            </Grid>
            <Grid>
            <Controller
                name="password"
                control={control}
                className={classes.controller}
                defaultValue=""
                render={({ field }) => (
                <TextField
                    {...field}
                    className={classes.textfield}
                    type="password"
                    label="Contraseña"
                    variant="outlined"
                    size="small"
                />
                )}
            />
            <p style={{ color:"#fff" }}>{errors.password?.message}</p>
            </Grid>
            <Grid>
            <Controller
                name="password_confirmation"
                control={control}
                className={classes.controller}
                defaultValue=""
                render={({ field }) => (
                <TextField
                    {...field}
                    className={classes.textfield}
                    type="password"
                    label="Confirma tu contraseña"
                    variant="outlined"
                    size="small"
                />
                )}
            />
            <p style={{ color:"#fff" }}>{errors.password_confirmation?.message}</p>
            </Grid>

            <p style={{ color:"#fff" }}>{result}</p>
            {userInfo && (
            <div>
                <div>Nombre: {userInfo.name}</div>
                <div>Token: {userInfo.token}</div>
            </div>
            )}

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