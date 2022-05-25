import MyCamera from "@/components/MyCamera";
import { homeFilters } from "@/resources/filters";
import {
  Alert,
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import { addNewPet } from "@/api/animalAPI";
import AuthContext from "@/contexts/auth-context";
import { Navigate } from "react-router-dom";
const AddPet = (props: any) => {
  const [openCamera, setOpenCamera] = useState(false);
  const [images, setImages] = useState<{ id: number; src: string }[]>([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [specs, setSpecs] = useState({
    species: "",
    age: "",
    size: "",
    gender: "",
  });
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [resStatus, setResStatus] = useState(0); //none 0 / success 1 / error -1
  const handleOpenCamera = () => setOpenCamera(true);
  const processImage = (image: string) => {
    setImages((prevList) => [...prevList, { id: prevList.length, src: image }]);
  };
  console.log("animal", specs, name, about);

  const handleCloseCamera = () => setOpenCamera(false);
  const handleFilter = (spec: string, value: string) => {
    setSpecs((prevSpecs) => {
      const newSpecs = { ...prevSpecs };
      (newSpecs as any)[spec] = value;
      return newSpecs;
    });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    addNewPet(
      authCtx.token!,
      name,
      about,
      specs,
      images.map((img) => img.src)
    )
      .then((res) => {
        setIsLoading(false);

        if (res?.ok) {
          setResStatus(1);
          return res.json();
        } else {
          return res?.json().then((data: any) => {
            let errorMessage = "adding failed!";
            setResStatus(-1);
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .catch((e: Error) => {
        setResStatus(-1);
      });
  };
  if (!authCtx.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <Grid
      container
      component="form"
      sx={{
        py: "2rem",
        px: { xs: "1rem", sm: "2rem", md: "15rem" },
        height: "100%",
        overflowY: "auto",
      }}
      onSubmit={handleSubmit}
    >
      <Snackbar
        open={!isLoading && !!resStatus}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={1000}
      >
        <Alert
          severity={resStatus === 1 ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {resStatus === 1
            ? "congrats! you added a new budy"
            : "oops!!  an error occured"}
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* <Grid item container xs={12} sx={{ }}> */}
      <Grid
        item
        container
        xs={12}
        sx={{ maxHeight: "50%", height: "100%", overflow: "auto" }}
      >
        {images.length < 5 && (
          <Grid item xs={6} sm={4} md={3} sx={{ p: "1rem" }}>
            <Paper
              sx={{
                width: "100%",
                height: "10rem",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button onClick={handleOpenCamera}>
                <PhotoCameraIcon />
              </Button>

              <Button component="label">
                <InsertPhotoIcon />
                <input type="file" hidden />
              </Button>
            </Paper>
          </Grid>
        )}
        {images.map((img) => (
          <Grid
            key={"addImg_" + img.id}
            item
            xs={6}
            sm={4}
            md={3}
            sx={{ p: "1rem" }}
          >
            <Paper
              sx={{
                width: "100%",
                height: "10rem",
                background: `no-repeat center/cover url(${img.src})`,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <IconButton
                color="error"
                onClick={() =>
                  setImages((prevList) =>
                    prevList.filter((currentImg) => currentImg.id != img.id)
                  )
                }
              >
                <DeleteIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sx={{ p: "1rem" }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ p: "1rem" }}>
        <TextField
          label="About"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </Grid>

      {homeFilters.map((filter, index) => (
        <Grid item xs={12} sx={{ p: "1rem" }}>
          <FormControl fullWidth>
            <InputLabel id={filter.label}>{filter.label}</InputLabel>

            <Select
              labelId={filter.label}
              label={filter.label}
              id={`${filter.label}-select`}
              value={(specs as any)[filter.label]}
              onChange={(event: SelectChangeEvent) =>
                handleFilter(filter.label, event.target.value)
              }
            >
              {filter.options.map((option: string) => (
                <MenuItem value={option}>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}

      <Grid item xs={12}>
        <Checkbox id="adopt" />

        <Typography component="label" htmlFor="adopt" variant="body1">
          put for adoption
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Grid>
      <MyCamera
        open={openCamera}
        handleClose={handleCloseCamera}
        processImage={processImage}
      />
    </Grid>
  );
};

export default AddPet;
