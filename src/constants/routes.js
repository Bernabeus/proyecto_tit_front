const publicRoutes = {
    LOGIN: "/login",
    REGISTER: "/registro",
    PERFIL: "/perfil",
    CONTENIDO: "/contenido"
  };
  
  const privateRoutes = {
    HOME: "/",
  };
  
  const Routes = {
    ...publicRoutes,
    ...privateRoutes,
  };
  export default Routes;