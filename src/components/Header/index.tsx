import { FC, useContext, useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
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
import AddPetIcon from "@/assets/addPet.svg";

import AnalyseIcon from "@/assets/analyse.svg";
import AdoptIcon from "@/assets/adopt.svg";
import BellIcon from "@/assets/bell.svg";
import LogoIcon from "@/assets/logo.svg";
import Icons from "@/assets/sprite.svg";

import PetHouseIcon from "@/assets/petHouse.svg";
import PillIcon from "@/assets/pill.svg";
import UserAvatar from "../UserAvatar";
import Icon from "../Icon";

const Header: FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const links = [
    { icon: AdoptIcon, href: "myPets" },
    { icon: AddPetIcon, href: "pet/addPet" },
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
    let currentPageIndex = -1;
    switch (currentPath) {
      case "/myPets":
        currentPageIndex = 0;
        break;
      case "/pet/addPet":
        currentPageIndex = 1;
        break;
      case "/doctor":
        currentPageIndex = 2;
        break;
      case "/notifications":
        currentPageIndex = 3;
        break;
      default:
        break;
    }
    setValue(currentPageIndex);
  }, [currentPath]);
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
          component={Link}
          to="/"
          sx={{ display: "block", minWidth: "7rem", maxWidth: "9rem" }}
          xs={1}
        >
          <Box component="img" src={LogoIcon} sx={{ width: "100%" }} />
        </Grid>
        {isLoggedIn && (
          <Grid
            item
            // md={7}
            // xs={isLoggedIn ? 11 : 9}
            xs={8}
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
                  icon={<Icon src={item.icon} />}
                  aria-label={item.href}
                  component={Link}
                  to={`/${item.href}`}
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
                <Button component={Link} to={`/${item}`} color="primary">
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
