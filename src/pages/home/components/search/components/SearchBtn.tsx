import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBtn() {
  return (
    <IconButton
      type="button"
      sx={{ p: "10px", color: "white" }}
      aria-label="search"
    >
      <SearchIcon fontSize="large" />
    </IconButton>
  );
}
