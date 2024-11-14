import { Box } from "@mui/material";

export default function Background() {
  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(to left bottom, #131313, #313131)",
          zIndex: 0,
        }}
        width="100%"
        height="60vh"
      ></Box>
      <Box sx={{ bgcolor: "#F8F6F6", height: "100%" }}></Box>
    </Box>
  );
}
