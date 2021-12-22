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
import Routes from "../constants/Routes";
import { makeStyles } from "@material-ui/core/styles";

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
        background: "#fff",
        fontFamily: "Rationale",
    }
}));

const LoginPage = () => {
    const {
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (formData) => setResult(JSON.stringify(formData));
    const [userInfo, setUserInfo] = useState(null);
    const [result, setResult] = useState("");
    const [errorsList, setErrorsList] = useState([]);
    const router = useRouter();
    const { login } = useAuth();
    const classes = useStyles();

    const onFinishLog = async (formData) => {
        try {
          const userData = {
            ...formData,
          };
          const response = await login(userData);
          setUserInfo(response.data);
          setResult("Usuario logueado en");
          reset();
          router.push(Routes.HOME);
        } catch (e) {
          const { response } = e;
          setResult("Un error ha ocurrido");
    
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
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={classes.textfield}
                    label="Contraseña"
                    variant="filled"
                    type="password"
                  />
                )}
              />
              <p style={{ color:"#fff" }}>{errors.password?.message}</p>
            </Grid>
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