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
import Notification from "@/components/Notification";

const Notifications: React.FC = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid
      container
      sx={{
        py: "2rem",
        px: { xs: "2rem", md: "15rem" },
        height: "100%",
        overflowY: "auto",
      }}
    >
      {["sam", "anny", "alin"].map((user) => (
        <Notification user={user} />
      ))}
    </Grid>
  );
};

export default Notifications;
