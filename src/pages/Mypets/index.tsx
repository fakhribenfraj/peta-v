import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddPetIcon from "@/assets/addPet.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { animals, SpecsFilter } from "@/resources/animals";
import SearchBar from "@/components/SearchBar";
import { borderColor } from "@mui/system";
import Icon from "@/components/Icon";
import PetsIcon from "@mui/icons-material/Pets";
import AuthContext from "@/contexts/auth-context";
import { getMyPets } from "@/api/animalAPI";
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
  const authCtx = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [animals, setAnimals] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [specs, setSpecs] = useState<SpecsFilter>({
    species: [],
    age: [],
    size: [],
    gender: [],
  });
  const animalList = animals?.filter(
    (animal) =>
      (specs.species.length === 0 ||
        specs.species.includes(animal.specs.species)) &&
      (specs.age.length === 0 || specs.age.includes(animal.specs.age)) &&
      (specs.size.length === 0 || specs.size.includes(animal.specs.size)) &&
      (specs.gender.length === 0 || specs.gender.includes(animal.specs.gender))
  );
  sortValue == "1" &&
    animalList?.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  sortValue == "2" &&
    animalList?.sort(function (a, b) {
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

  useEffect(() => {
    setIsLoading(true);
    getMyPets(authCtx.token!)
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
      .then((data) => setAnimals(data?.pets))
      .catch((e: Error) => {});
  }, []);
  return (
    <Grid
      container
      sx={{
        height: "100%",
        overflowY: "hidden",
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
        {isLoading && (
          <Grid item container xs={12} justifyContent="center">
            <CircularProgress color="primary" />
          </Grid>
        )}
        {animalList?.map((animal) => (
          <Grid item xs={12} sm={6} md={4} sx={{ padding: " 2rem 1rem" }}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                {/* <IconButton color="primary">
                    <EditIcon />
                  </IconButton> */}
                <Tooltip title="put fo adoption">
                  {animal.status == 0 ? (
                    <IconButton color="primary">
                      <PetsIcon />
                    </IconButton>
                  ) : (
                    <p>pending...</p>
                  )}
                </Tooltip>
              </CardActions>
              <Box component={Link} to={`/pet/${animal.id}`}>
                <CardMedia
                  component="img"
                  height="194"
                  // image={animal.imgs[0].src}
                  // alt={animal.imgs[0].alt}
                />
                <CardContent>
                  <Typography variant="h5" color="primary.dark">
                    {animal.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {animal.desc}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Mypets;
