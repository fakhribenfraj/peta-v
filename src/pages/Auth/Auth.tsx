import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import useStyles from "./styles";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";
import { authenticate } from "../../api/authAPI";

const Auth = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const [value, setValue] = useState(0);
  const handleChange = (event: any, value: number) => {
    setValue(value);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  useEffect(() => {
    if (props.register) {
      setValue(0);
    } else {
      setValue(1);
    }
  }, [props.register]);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef?.current?.value;
    const enteredPassword = passwordInputRef?.current?.value;

    // optional: Add validation
    setIsLoading(true);
    let navigationUrl = "/";
    authenticate(enteredEmail, enteredPassword, !props.register)
      .then((res) => {
        setIsLoading(false);
        if (res?.ok) {
          return res.json();
        } else {
          return res?.json().then((data: any) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate(navigationUrl);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Box
      sx={{
        p: "5rem",
        bgcolor: "rgba(0,0,0,.1)",
        height: "100%",
      }}
    >
      <Paper
        variant="outlined"
        elevation={0}
        sx={{ width: "50rem", m: "0 auto", p: "2rem" }}
      >
        <Grid
          container
          // direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Box
              component={Link}
              to="/"
              sx={{ width: "7rem", display: "inline-block" }}
            >
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{ width: "100%" }}
              ></Box>
            </Box>
            <Typography variant="h5" component='span'>peta V</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h1">
              {props.register ? "Register" : "Log in"}
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <>
              {["google", "facebook", "apple"].map((option) => (
                <Grid
                  item
                  xs={12}
                  component={Button}
                  variant="outlined"
                  color="secondary"
                >
                  continut with {option}
                </Grid>
              ))}
            </>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              component="form"
              autoComplete="off"
              sx={styles.form}
              onSubmit={handleSubmit}
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
              >
                {props.register && (
                  <Grid item>
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      color="primary"
                      size="small"
                      InputLabelProps={{ sx: styles.input }}
                    />
                  </Grid>
                )}

                <Grid item>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    color="primary"
                    size="small"
                    inputRef={emailInputRef}
                    InputLabelProps={{ sx: styles.input }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    color="primary"
                    size="small"
                    InputLabelProps={{ sx: styles.input }}
                    inputRef={passwordInputRef}
                  />
                </Grid>
                {props.register && (
                  <Grid item>
                    <TextField
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      color="primary"
                      size="small"
                      InputLabelProps={{ sx: styles.input }}
                    />
                  </Grid>
                )}

                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="medium"
                    sx={styles.button}
                  >
                    {props.register ? "SIGN UP" : "LOG IN"}
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          {!props.register && (
            <>
              <Grid item>
                <Typography
                  variant="h6"
                  align="center"
                  color="primary"
                ></Typography>
              </Grid>
              <Grid item>
                <ButtonGroup>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                  ></IconButton>
                </ButtonGroup>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Auth;
