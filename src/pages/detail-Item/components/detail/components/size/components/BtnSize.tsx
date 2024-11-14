import { Box, ToggleButton } from "@mui/material";
import { useState } from "react";

export default function BtnSize() {
  const [activeSize, setActiveSize] = useState("");

  const handleButtonClick = (size: string) => {
    setActiveSize(size);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      {["کوچک", "متوسط", "بزرگ"].map((size) => (
        <ToggleButton
          key={size}
          value={size}
          sx={{
            bgcolor: activeSize === size ? "#FFF5EE" : "#FFFFFF",
            border:
              activeSize === size ? "#C67C4E 1px solid" : "#DEDEDE 1px solid",
            borderRadius: "10px",
            px: "8%",
            py: "0.4rem",
            color: activeSize === size ? "#C67C4E" : "#000000",
            mt: "10px",
            mb: "6rem",
          }}
          onClick={() => handleButtonClick(size)}
        >
          {size}
        </ToggleButton>
      ))}
    </Box>
  );
}
