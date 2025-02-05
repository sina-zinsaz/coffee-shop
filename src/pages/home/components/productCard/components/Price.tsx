import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useContext, useState } from "react";
import useWindowSize from "../../../../../functions/Utility";
import { priceType } from "../../../../../types/CompoType";
import { AppContext } from "../../../../../context/AppContext";

export default function Price({ price }: priceType) {
  const { width } = useWindowSize();
  const [count, setCount] = useState(0);
  const { setIsProductAdded } = useContext(AppContext);

  const handleAdd = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setIsProductAdded(newCount > 0);
      return newCount;
    });
  };

  const handleRemove = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      setIsProductAdded(newCount > 0);
      return newCount;
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my="1rem"
    >
      {count === 0 ? (
        <>
          <Box
            component="button"
            sx={{
              background: "#C67C4E",
              color: "white",
              height: width > 375 ? "2.5rem" : "2rem",
              width: width > 375 ? "2.5rem" : "2rem",
              borderRadius: width > 375 ? "15px" : "12px",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleAdd}
          >
            <AddIcon />
          </Box>
          <Typography fontWeight="bold" sx={{ fontSize: "1rem" }}>
            ريال {price.toFixed(2)}
          </Typography>
        </>
      ) : (
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="end"
        >
          <Typography fontWeight="bold" sx={{ fontSize: "1rem" }} mb="1rem">
            ريال {price.toFixed(2)}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              component="button"
              sx={{
                background: "#000",
                color: "white",
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: "12px",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleAdd}
            >
              <AddIcon />
            </Box>
            <Box
              sx={{
                background: "#F5F5F5",
                color: "black",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
              }}
            >
              {count}
            </Box>
            <Box
              component="button"
              sx={{
                background: "#FF5A5A",
                color: "white",
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: "12px",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleRemove}
            >
              <CloseRoundedIcon />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
