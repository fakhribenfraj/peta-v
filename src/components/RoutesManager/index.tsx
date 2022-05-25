import App from "@/App";
import AddPet from "@/pages/AddPet";
import Analyse from "@/pages/Analyse";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home";
import MyPets from "@/pages/Mypets";
import Notifications from "@/pages/Notifications";
import Pet from "@/pages/Pet";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";

const RoutesManager = () => {
  const authCtx = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />}></Route>

            {authCtx.isLoggedIn && (
              <>
                <Route path="myPets" element={<MyPets />}></Route>
                <Route path="doctor" element={<Analyse />}></Route>
                <Route path="notifications" element={<Notifications />}></Route>
              </>
            )}

            {!authCtx.isLoggedIn && (
              <>
                <Route path="register" element={<Auth register />}></Route>
                <Route path="login" element={<Auth />}></Route>
              </>
            )}
            <Route path="pet">
              <Route path="" element={<Navigate to="/" />} />
              <Route path=":petId" element={<Pet />}></Route>
              <Route path="addPet" element={<AddPet />}></Route>
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default RoutesManager;
