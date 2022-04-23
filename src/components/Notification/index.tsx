import MyCamera from "@/components/MyCamera";
import { homeFilters } from "@/resources/filters";
import {
  Box,
  Button,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

type NotificationProps = {
  user: string;
};
const Notification: React.FC<NotificationProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid
      item
      container
      component={Paper}
      xs={12}
      sx={{ p: "1rem", height: "min-content", my: "1rem" }}
    >
      <Grid item container xs={12}>
        <Grid item xs={4}>
          <Box component="img"></Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" gutterBottom>
              to: {props.user}
            </Typography>

            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Box>
          <Typography variant="body1">avenue bla ljdsfj</Typography>
          <Typography variant="body1">93887777</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              History
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              id ratione, ut commodi eius
            </Typography>
          </Grid>
        </Collapse>
      </Grid>
      <Grid item container xs={12} justifyContent="flex-end">
        <Button color="secondary">Cancel</Button>
        <Button>Accept</Button>
      </Grid>
    </Grid>
  );
};

export default Notification;
