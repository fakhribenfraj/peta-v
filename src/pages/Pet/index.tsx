import Carousel from "@/components/Carousel";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { animals } from "@/resources/animals";
import { getPetById } from "@/api/animalAPI";
const Pet: React.FC = (props) => {
  let { petId } = useParams();
  const [animal, setAnimal] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  // const animal = animals.find((animal) => animal.id == +petId!);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getPetById(parseInt(petId!))
      .then((res) => {
        setIsLoading(false);

        if (res?.ok) {
          return res.json();
        } else {
          return res?.json().then((data: any) => {
            let errorMessage = "adding failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => setAnimal(data?.pets))
      .catch((e: Error) => {
        setAnimal(null);
      });
  }, []);
  if (!animal) {
    return (
      <>
        {isLoading ? (
          <Grid item container xs={12} justifyContent="center">
            <CircularProgress color="primary" />
          </Grid>
        ) : (
          <h1>animal not found</h1>
        )}
      </>
    );
  }
  return (
    <Grid
      container
      sx={{
        height: "100%",
        overflow: "auto",
        bgcolor: "rgba(0,0,0,.2)",
        pt: { xs: "6.5rem", lg: "6.7rem", xl: "7.5rem" },
        px: { md: "2rem" },
      }}
    >
      {/* <Carousel images={animal?.imgs} /> */}
      <Grid item xs={12} sm={8} sx={{ p: "1rem" }}>
        <Grid
          container
          component={Paper}
          flexDirection="column"
          sx={{ p: "3rem" }}
        >
          <Grid item>
            <Typography variant="h2">{animal?.name}</Typography>
            <Typography variant="h6">location</Typography> <Divider />
          </Grid>
          <Grid item>
            <Typography variant="body1">{animal?.specs?.species}</Typography>
            <Divider />
          </Grid>
          <Grid item>
            <Typography variant="h2" gutterBottom>
              About
            </Typography>
            <Typography variant="h6">Charasteristics</Typography>
            <Typography variant="body1" gutterBottom>
              {animal?.specs?.age}, {animal?.specs?.gender},{" "}
              {animal?.specs?.size},
            </Typography>
            <Typography variant="h6">Health</Typography>
            <Typography variant="body1">
              quality1, quality1, quality1,
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Meet {animal?.name}</Typography>
            <Typography variant="body1" gutterBottom>
              {animal?.desc}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ p: "1rem" }}>
        <Grid
          container
          component={Paper}
          flexDirection="column"
          sx={{ p: "3rem" }}
        >
          <Typography variant="h5" gutterBottom component={Link} to="/user">
            Userame
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id
            ratione, ut commodi eius
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Adopt
          </Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Adoption request</DialogTitle>
            <DialogContent>
              <Typography variant="body1" gutterBottom>
                are you sure you want to adopt Mark
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleClose}>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pet;
