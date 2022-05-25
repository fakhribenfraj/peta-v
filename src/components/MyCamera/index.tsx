import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
type MyCameraProps = {
  open: boolean;
  processImage: (arg0: string) => void;
  handleClose: () => void;
};
const MyCamera: React.FC<MyCameraProps> = (props) => {
  const handleTakePhoto = (dataUri: string) => {
    // Do stuff with the photo...
    console.log("takePhoto", dataUri);
    setPhoto(dataUri);
    setIsCapturing(false);
  };
  const handleSaving = () => {
    props.processImage(photo);
    props.handleClose();
  };
  const [photo, setPhoto] = useState("");
  const [isCapturing, setIsCapturing] = useState(true);
  useEffect(() => {
    setPhoto("");
    setIsCapturing(true);
  }, [props.open]);

  return (
    <Dialog
      disableEscapeKeyDown
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      sx={{ p: "0" }}
    >
      <Button
        onClick={props.handleClose}
        sx={{ position: "absolute", top: 0, right: 0, zIndex: 2 }}
      >
        Cancel
      </Button>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Camera
          // idealResolution={{ width: 640, height: 480 }}
          // isFullscreen
          onTakePhotoAnimationDone={(dataUri) => {}}
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
        {!isCapturing && (
          <Box
            sx={{
              background: `no-repeat center/cover url(${photo})`,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            <Button onClick={() => setIsCapturing(true)}>retake</Button>
            <Button variant="contained" onClick={handleSaving}>
              save
            </Button>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default MyCamera;
