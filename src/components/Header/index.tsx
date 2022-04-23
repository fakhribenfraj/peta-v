import { FC, useContext, useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchBar from "../SearchBar";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "@/contexts/auth-context";
import HomeIcon from "@/assets/home.svg";
import AnalyseIcon from "@/assets/analyse.svg";
import AdoptIcon from "@/assets/adopt.svg";
import BellIcon from "@/assets/bell.svg";
import LogoIcon from "@/assets/logo.svg";
import PetHouseIcon from "@/assets/petHouse.svg";
import PillIcon from "@/assets/pill.svg";
import UserAvatar from "../UserAvatar";

const Header: FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const links = [
    { icon: HomeIcon, href: "" },
    { icon: AdoptIcon, href: "myPets" },
    { icon: PillIcon, href: "doctor" },
    { icon: BellIcon, href: "notifications" },
  ];
  const theme = useTheme();
  const underMd = useMediaQuery(theme.breakpoints.down("md"));
  const currentPath = useLocation().pathname;
  const [value, setValue] = useState(0);
  const handleChange = (event: any, value: number) => {
    setValue(value);
  };
  const actionsVisibility = !isLoggedIn || (!underMd && isLoggedIn);
  const avatarVisibility = isLoggedIn && underMd;

  console.log("isLoggied in", isLoggedIn);

  useEffect(() => {
    let currentPageIndex = 0;
    switch (currentPath) {
      case "/":
        currentPageIndex = 0;
        break;
      case "/user/myPets":
        currentPageIndex = 1;
        break;
      case "/user/doctor":
        currentPageIndex = 2;
        break;
      case "/user/notifications":
        currentPageIndex = 3;
        break;
      default:
        break;
    }
    setValue(currentPageIndex);
  }, []);
  return (
    <AppBar position="fixed" sx={{ bgcolor: "common.white" }}>
      <Grid
        component={Toolbar}
        variant="dense"
        container
        disableGutters={underMd}
      >
        <Grid
          item
          sx={{ display: { xs: "none", md: "flex" } }}
          xs={1}
          container
        >
          <Grid
            item
            component={Link}
            to="/"
            sx={{ display: "block", minWidth: "7rem", maxWidth: "9rem" }}
            xs={12}
          >
            <Box component="img" src={LogoIcon} sx={{ width: "100%" }} />
          </Grid>
          {/* <Grid item xs={avatarVisibility ? 8 : 9}>
            <SearchBar />
          </Grid> */}
          {/* {avatarVisibility && (
            <Grid item xs={1}>
              <UserAvatar />
            </Grid>
          )} */}
        </Grid>
        {isLoggedIn && (
          <Grid
            item
            // md={7}
            xs={isLoggedIn ? 11 : 9}
            md={isLoggedIn ? 10 : 8}
            container
            justifyContent="space-between"
            sx={{ px: "2rem" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              // indicatorColor="secondary"
              sx={{ width: "100%" }}
            >
              {links.map((item) => (
                <Tab
                  key={item.href}
                  icon={
                    <Box
                      component="img"
                      src={item.icon}
                      sx={{
                        width: { xs: "2.5rem", md: "4rem" },
                      }}
                    />
                  }
                  aria-label={item.href}
                  component={Link}
                  to={
                    item.href.length == 0
                      ? `/${item.href}`
                      : `/user/${item.href}`
                  }
                  sx={{
                    minWidth: "0",
                    p: { xs: ".8rem 1rem", md: "1rem 1.2rem" },
                  }}
                />
              ))}
            </Tabs>
          </Grid>
        )}
        <Grid
          item
          xs={isLoggedIn ? 1 : 10}
          container
          justifyContent="flex-end"
          alignItems="center"
          alignSelf="stretch"
          sx={{ ml: "auto" }}
        >
          {isLoggedIn ? (
            <Grid item>
              <UserAvatar />
            </Grid>
          ) : (
            <>
              {["login", "register"].map((item) => (
                <Button component={Link} to={`/user/${item}`} color="primary">
                  {item}
                </Button>
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
