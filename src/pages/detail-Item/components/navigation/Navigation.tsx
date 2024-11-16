import { BottomNavigation } from "@mui/material";
import Price from "./components/Price";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/Btn";
export default function Navigation({ price }: { price: number }) {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/order");
  };
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
          sx={{
            py: "4.5%",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "15px",
            color: "white",
            border: "none",
            bgcolor: "#C67C4E",
            px: "20%",
          }}
          onClick={nextPage}
        />
      </BottomNavigation>
    </>
  );
}
