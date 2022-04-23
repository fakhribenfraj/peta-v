import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { animals, SpecsFilter } from "@/resources/animals";
import SearchBar from "@/components/SearchBar";
import { borderColor } from "@mui/system";
const Mypets: React.FC = (props) => {
  const filters: { label: string; options: string[] }[] = [
    {
      label: "species",
      options: ["dog", "cat", "rabbit", "horse", "bird"],
    },
    { label: "age", options: ["puppy", "young", "adult"] },
    {
      label: "size",
      options: ["small", "medium", "large", "extra large"],
    },
    { label: "gender", options: ["male", "female"] },
  ];
  const theme = useTheme();
  const underMd = useMediaQuery(theme.breakpoints.down("md"));
  const [sortValue, setSortValue] = useState("");
  const [value, setValue] = useState("");
  const [specs, setSpecs] = useState<SpecsFilter>({
    species: [],
    age: [],
    size: [],
    gender: [],
  });
  const animalList = animals.filter(
    (animal) =>
      (specs.species.length === 0 ||
        specs.species.includes(animal.specs.species)) &&
      (specs.age.length === 0 || specs.age.includes(animal.specs.age)) &&
      (specs.size.length === 0 || specs.size.includes(animal.specs.size)) &&
      (specs.gender.length === 0 || specs.gender.includes(animal.specs.gender))
  );
  sortValue == "1" &&
    animalList.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  sortValue == "2" &&
    animalList.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  const handleFilter = (spec: string, value: string) => {
    // setSortValue(event.target.value as string);
    setSpecs((prevSpecs) => {
      const newSpecs = { ...prevSpecs };
      (newSpecs as any)[spec] = value;
      console.log("newSpecs", newSpecs);

      return newSpecs;
    });
  };
  const handleSort = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
  };
  return (
    <Grid
      container
      sx={{
        height: "100%",
        overflowY: "hidden",
        pb: "6rem",
      }}
    >
      <Grid
        item
        container
        xs={12}
        md={3}
        sx={{
          p: { md: "2rem" },
          overflow: "auto",
          height: { md: "100%" },
        }}
        alignItems="flex-start"
        alignContent="flex-start"
      >
        {filters.map((filter, index) => (
          <Grid
            item
            xs={3}
            md={12}
            key={filter.label + index}
            sx={{ py: "1rem", px: ".5rem" }}
          >
            {!underMd && (
              <Typography
                component="label"
                variant="h6"
                htmlFor={`${filter.label}-select`}
                id={filter.label}
                align="center"
                sx={{ display: "block", color: "primary.main" }}
              >
                {filter.label}
              </Typography>
            )}

            <FormControl fullWidth>
              {underMd && (
                <InputLabel id={filter.label}>{filter.label}</InputLabel>
              )}

              <Select
                labelId={filter.label}
                label={underMd && filter.label}
                id={`${filter.label}-select`}
                multiple
                value={(specs as any)[filter.label]}
                onChange={(event: SelectChangeEvent) =>
                  handleFilter(filter.label, event.target.value)
                }
                renderValue={(selected) => {
                  // if (selected.includes("any")) {
                  //   return <em>Any</em>;
                  // }
                  console.log("test", selected);

                  return (selected as any).join(", ");
                }}
              >
                {/* <MenuItem value="any">
                  <ListItemText primary="Any" />
                </MenuItem> */}
                {filter.options.map((option) => (
                  <MenuItem value={option}>
                    <Checkbox
                      checked={
                        (specs as any)[filter.label].indexOf(option) > -1
                      }
                    />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        container
        md={9}
        sx={{ overflow: "auto", height: { xs: "85%", md: "100%" }, py: "2rem" }}
      >
        <Grid item container xs={12} sx={{ m: "1rem" }}>
          <Grid item xs={8}>
            <SearchBar />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end", pl: "1rem" }}
          >
            <FormControl sx={{ width: "100%", maxWidth: "15rem" }}>
              <InputLabel id="sortBy">Sort By</InputLabel>
              <Select
                labelId="sortBy"
                id="sortBy-select"
                value={sortValue}
                label="sortBy"
                onChange={handleSort}
              >
                <MenuItem value={1}>{`A->Z`}</MenuItem>
                <MenuItem value={2}>{`Z->A`}</MenuItem>
                <MenuItem value={3}>Newest</MenuItem>
                <MenuItem value={4}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {animalList.map((animal) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ padding: " 2rem 1rem" }}
            component={Link}
            to={`/pet/${animal.name}`}
          >
            <Card sx={{ maxWidth: "100%" }}>
              <CardMedia
                component="img"
                height="194"
                image={animal.imgs[0].src}
                alt={animal.imgs[0].alt}
              />
              <CardContent>
                <Typography variant="h5" color="primary.dark">
                  {animal.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  cum nihil deserunt
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: { xs: 0, md: "25%" },
          width: { xs: "100%", md: "50%" },
          borderRadius: { xs: "none", md: "1rem 1rem 0 0" },
          overflow: "hidden",
          borderTop: "solid .3rem",
          borderColor: "primary.dark",
          height: "6rem",
        }}
        elevation={5}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/pet/addPet"
            label="add pet"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Grid>
  );
};

export default Mypets;

{
  /* <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: "25%",
          width: "50%",
          borderRadius: "1rem 1rem 0 0",
          overflow: "hidden",
        }}
        elevation={5}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ bgcolor: "secondary.main" }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper> */
}
