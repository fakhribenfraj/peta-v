import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Modal,
} from "@mui/material";
import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
type MyCameraProps = {
  open: boolean;
  handleClose: () => void;
};
const MyCamera: React.FC<MyCameraProps> = (props) => {
  const handleTakePhoto = (dataUri: string) => {
    // Do stuff with the photo...
    console.log("takePhoto", dataUri);
  };

  return (
    <Dialog
      disableEscapeKeyDown
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      sx={{ p: "0" }}
    >
      {/* <DialogTitle>Adoption request</DialogTitle> */}
      <DialogContent sx={{ p: "0" }}>
        <Camera
          // idealResolution={{ width: 640, height: 480 }}
          // isFullscreen
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button variant="contained">save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyCamera;
