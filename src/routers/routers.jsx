import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import Home from "../pages/home/home";
import SignIn from "../pages/sign-in/sign-in";
import SignUp from "../pages/sign-up/sign-up";
import { localStorageGetItem } from "../utils/localStorage";

function ProtectRoute({ redirecTo }) {
  const isAuthenticated = localStorageGetItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to={redirecTo} />;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* <Route element={<ProtectRoute redirecTo={"/"} />}> */}
      <Route path="/home" element={<Home />} />
      {/* </Route> */}
    </>
  )
);
