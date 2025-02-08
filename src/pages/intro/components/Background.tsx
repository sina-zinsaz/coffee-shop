import { Box } from "@mui/material";

export default function Background() {
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://s8.uupload.ir/files/image_3_ysrq.png"
          alt="intro img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <Box
          component="div"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), #000000)",
          }}
        />
      </Box>
    </>
  );
}
