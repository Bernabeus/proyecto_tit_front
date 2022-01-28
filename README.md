Pasos para el uso del proyecto.

## Descarga del proyecto

Copiar la URL:

![image](https://user-images.githubusercontent.com/58036212/151187724-e6294586-9ed1-4d4d-9b52-10da1d2047cf.png)

Luego abrir una la línea de comandos para ingresar el comando con la URL copiada anteriormente:

```bash
git clone <URL>
```

Todo esto se realiza para generar una copia local del proyecto en el computador.

Luego ingresar a la carpeta con el comando:

```bash
cd proyecto_tit_front
```

## Instalación del proyecto

Ahora es necesario instalar todas las dependencias necesarias para correr el proyecto, por lo que cual es necesario el comando:

```bash
npm install
```

Cuando termine su instalación y teniendo todo lo necesario para ejecutar un proyecto de Next.js se deberá ejecutar el servidor de desarrollo con el comando:

```bash
npm run dev
# o
yarn dev
```

Posterior a ello abrimos la URl [http://localhost:3000](http://localhost:3000) desde cualquier navegador para ver el resultado. 

Una sugerencia es tener desactivado un bloqueador de cookies para enviar los datos al servidor de heroku en el cual esta desplegado el API REST del backend.
