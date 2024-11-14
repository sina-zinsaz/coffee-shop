import { BottomNavigation } from "@mui/material";
import Price from "./components/Price";
// import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/Btn";
import useWindowSize from "../../../../functions/Utility";
export default function Navigation({ price }: { price: number }) {
  // const navigate = useNavigate();
  const { width } = useWindowSize();

  // const nextPage = () => {
  //   navigate("/order");
  // };
  return (
    <>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          borderRadius: "1rem 1rem 0rem 0rem",
          height: "5rem",
          bgcolor: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        showLabels
      >
        <Price price={price} />
        <Btn
          Title="اکنون بخرید"
          py={width > 767 ? 2.5 : 4.5}
          fontSize="1.1rem"
          borderRadius="15px"
          border="none"
          bgcolor="C67C4E"
          color="white"
          px={20}
          // onClick={nextPage}
        />
      </BottomNavigation>
    </>
  );
}
