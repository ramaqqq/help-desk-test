import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = {
    loggedIn: localStorage.getItem("role") === "USER",
  };
  return user && user.loggedIn;
};

const Protect = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default Protect;
