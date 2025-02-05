import { Box } from "@mui/material";
import Map from "./components/Map";
import HeadBtn from "./components/HeadBtn";
import Navigation from "./components/navigation/Navigation";

export default function Delivery() {
  return (
    <>
      <Box position="relative" width="100%" height="100vh" overflow="hidden">
        <Map />
        <HeadBtn />
        <Navigation />
      </Box>
    </>
  );
}
