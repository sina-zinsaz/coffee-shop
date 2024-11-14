import { Box, Container, Typography } from "@mui/material";
// import BtnNavigation from "./components/BtnNavigation";
import Profile from "./components/Profile";
// import Search from "./components/search/Search";
// import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ProductCard from "./components/productCard/ProductCard";
import Background from "./components/Background";

export default function Home() {
  return (
    <>
      <Box position="absolute" zIndex="-1" width="100%" height="100%">
        <Background />
      </Box>
      <Box position="relative" zIndex="1" mb="6rem">
        <Container>
          <Profile />
          {/* <Search /> */}
          {/* <Banner /> */}
          <Typography color="white" variant="h5" fontWeight="bold">
            صبحت بخیر
          </Typography>
          <Typography color="#9B9B9B" variant="body1" my="1rem">
            امروزتو با یه کافی حال خوب کن شروع کن:)
          </Typography>
          <Categories />
          <ProductCard />
        </Container>
      </Box>
      {/* <Box position="relative" zIndex="2">
        <BtnNavigation />
      </Box> */}
    </>
  );
}
