import { Box } from "@mui/material";
import React from "react";

type IconType = {
  src: string;
  size?: string;
};
const Icon: React.FC<IconType> = (props) => {
  const size = props.size || "3rem";
  return (
    <Box
      component="img"
      src={props.src}
      sx={{ width: size, height: size }}
    ></Box>
  );
};

export default Icon;
