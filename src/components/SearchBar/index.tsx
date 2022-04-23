import Search from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  Backdrop,
  Box,
  IconButton,
  Input,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

type SearchBarProps = {
  width?: "string";
};
const SearchBar: React.FC<SearchBarProps> = (props) => {
  const theme = useTheme();
  const [searchLineText, setSearchLineText] = useState<string>("");

  return (
    <Input
      placeholder="Find pet..."
      value={searchLineText}
      fullWidth
      onChange={(event) => {
        setSearchLineText(event.target.value);
      }}
      endAdornment={
        <>
          {searchLineText && (
            <IconButton
              sx={{ p: 0 }}
              onClick={() => {
                setSearchLineText("");
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
          <IconButton color="primary" aria-label="search" size="small">
            <Search />
          </IconButton>
        </>
      }
    />
  );
};

export default SearchBar;
