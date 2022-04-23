import MyCamera from "@/components/MyCamera";
import { homeFilters } from "@/resources/filters";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddPet = (props: any) => {
  const [openCamera, setOpenCamera] = useState(false);
  const handleOpenCamera = () => setOpenCamera(true);
  const handleCloseCamera = () => setOpenCamera(false);
  const handleFilter = (spec: string, value: string) => {
    // setSortValue(event.target.value as string);
    // setSpecs((prevSpecs) => {
    //   const newSpecs = { ...prevSpecs };
    //   (newSpecs as any)[spec] = value;
    //   console.log("newSpecs", newSpecs);
    //   return newSpecs;
    // });
  };
  return (
    <Grid
      container
      component="form"
      sx={{
        py: "2rem",
        px: { xs: "2rem", md: "15rem" },
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Grid item container xs={12} sx={{ p: "1rem" }}>
        <Grid item xs={12} >
          <Paper sx={{ p: "10rem" }}/>
        </Grid>
        <Grid item xs={6} sx={{ p: "1rem" }}>
          <Button variant="contained" onClick={handleOpenCamera}>
            take pic
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ p: "1rem" }}>
          <Button variant="contained">select image</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ p: "1rem" }}>
        <TextField label="Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sx={{ p: "1rem" }}>
        <TextField
          label="About"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
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
              value={filter.label}
              onChange={(event: SelectChangeEvent) =>
                handleFilter(filter.label, event.target.value)
              }
              // renderValue={(selected) => {
              //   // if (selected.includes("any")) {
              //   //   return <em>Any</em>;
              //   // }
              //   console.log("test", selected);

              //   return (selected as any).join(", ");
              // }}
            >
              {/* <MenuItem value="any">
        <ListItemText primary="Any" />
      </MenuItem> */}
              {filter.options.map((option) => (
                <MenuItem value={option}>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
      <Grid item>
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Grid>
      <MyCamera open={openCamera} handleClose={handleCloseCamera} />
    </Grid>
  );
};

export default AddPet;
