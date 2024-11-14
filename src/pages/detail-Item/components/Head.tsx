import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PinkHeartIcon, PinkHeartIconWithBorder } from "../icons/Icons";

export default function Head() {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <IconButton onClick={handleFavoriteClick}>
        {isFavorite ? <PinkHeartIcon /> : <PinkHeartIconWithBorder />}
      </IconButton>
      <Box fontWeight="bold" fontSize="18px">
        جزئیات
      </Box>
      <IconButton onClick={() => navigate("/home")}>
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
