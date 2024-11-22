import { BottomNavigation } from "@mui/material";
import Btn from "../../../components/Btn";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export default function Navigation() {
  const { setStatusOrder, statusOrder } = useContext(AppContext);
  const nextPage = () => {
    setStatusOrder(statusOrder + 1);
  };
  return (
    <>
      {statusOrder === 3 ? (
        ""
      ) : (
        <BottomNavigation
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            height: "5rem",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          showLabels
        >
          {statusOrder === 1 ? (
            ""
          ) : (
            <Btn
              Title={statusOrder === 2 ? "دَم صندوق پول میدم" : "تغییر سفارش"}
              sx={{
                py: "4.5%",
                fontSize: "1.1rem",
                borderRadius: "15px",
                border: "none",
                background: "#000000",
                color: "white",
                px: "10%",
                fontWeight: "bold",
              }}
            />
          )}

          <Btn
            Title={statusOrder === 2 ? "پرداخت آنلاین" : "صدا زدن کافه دار"}
            sx={{
              py: "4.5%",
              fontSize: "1.1rem",
              borderRadius: "15px",
              border: "none",
              background: "#5A74FF",
              color: "white",
              px: "10%",
              fontWeight: "bold",
            }}
            onClick={nextPage}
          />
        </BottomNavigation>
      )}
    </>
  );
}
