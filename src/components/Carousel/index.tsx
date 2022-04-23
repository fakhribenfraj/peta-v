import {
  Button,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@emotion/react";

type CarouselProps = {
  images: { src: string; alt: string }[];
};
const Carousel: React.FC<CarouselProps> = (props) => {
  const theme = useTheme();
 console.log('props.images', props.images)
  // const centerVerticalStyle = { display: "flex", alignItems: "center" };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChangeIndex = (index: number) => {
    setSelectedIndex(index);
  };
  const handleNext = (step: number) => {
    setSelectedIndex((prevIndex: number) => {
      if (prevIndex + step < 0) return props.images.length - 1;
      if (prevIndex + step > props.images.length - 1) return 0;
      return prevIndex + step;
    });
  };
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSelectedIndex(value - 1);
  };
  return (
    <Grid
      item
      xs={12}
      container
      alignItems="stretch"
      justifyContent="space-between"
    >
      <Grid item container xs={12}>
        <Button
          item
          xs={1}
          component={Grid}
          color="secondary"
          onClick={() => handleNext(-1)}
          sx={{ minWidth: "0" }}
        >
          <ArrowBackIosIcon />
        </Button>
        <Grid item xs={10}>
          <SwipeableViews
            enableMouseEvents
            index={selectedIndex}
            onChangeIndex={handleChangeIndex}
            style={{ width: "100%", height: "50vh" }}
            slideStyle={{
              padding: ".1rem",
            }}
          >
            {props.images?.map((image, index) => (
              <Paper
                key={image.alt + index}
                elevation={1}
                sx={{
                  bgcolor: "secondary.light",
                  height: "100%",
                  // filter:
                  //   index === selectedIndex
                  //     ? "none"
                  //     : "saturate(25%) brightness(.25)",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt + "_" + index}
                  style={{
                    margin: "0 auto",
                    display: "block",
                    height: "100%",
                  }}
                />
              </Paper>
            ))}
          </SwipeableViews>
        </Grid>
        <Button
          item
          xs={1}
          component={Grid}
          color="secondary"
          onClick={() => handleNext(1)}
          sx={{ minWidth: "0" }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Grid>

      <Grid item xs={12} sx={{ p: "1rem" }}>
        <Pagination
          count={props.images.length}
          hideNextButton
          hidePrevButton
          size="small"
          page={selectedIndex + 1}
          variant="outlined"
          onChange={handleChange}
          sx={{ ".MuiPagination-ul": { justifyContent: "center" } }}
          // renderItem={(item) => (
          //   <PaginationItem
          //     sx={{
          //       border: "solid .2rem",
          //       borderColor: "primary.main",
          //       height: "1.5rem",
          //       minWidth: "1.5rem",
          //       p: "0",
          //     }}
          //   />
          // )}
        />
      </Grid>
    </Grid>
  );
};

export default Carousel;
