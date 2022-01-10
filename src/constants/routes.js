const publicRoutes = {
    HOME: "/",
    INFORMACION: "/informacion",
  };
  
  const privateRoutes = {
    PERFIL: "/perfil",
    CONTENIDO: "/contenido",
    LOGRO: "/logro",
  };
  
  const Routes = {
    ...publicRoutes,
    ...privateRoutes,
  };
  export default Routes;