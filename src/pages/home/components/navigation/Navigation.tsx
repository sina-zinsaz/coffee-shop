import { BottomNavigation } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/Btn";
export default function Navigation() {
  // const navigate = useNavigate();

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
        <Btn
          Title="کامل کردن سفارش"
          sx={{
            py: "4.5%",
            fontSize: "1.1rem",
            borderRadius: "15px",
            border: "none",
            background: "linear-gradient(to left bottom, #131313, #313131)",
            color: "white",
            px: "20%",
            fontWeight: "bold",
          }}
        />
      </BottomNavigation>
    </>
  );
}
