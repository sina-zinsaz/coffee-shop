import { Box, Paper } from "@mui/material";
import SearchBtn from "./components/SearchBtn";
import InputSearch from "./components/InputSearch";
import SettingSearch from "./components/SettingSearch";

export default function Search() {
  return (
    <Box width="100%">
      <Paper
        component="form"
        sx={{
          height: "4rem",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#313131",
          borderRadius: "20px",
        }}
      >
        <SearchBtn />
        <InputSearch />
        <SettingSearch />
      </Paper>
    </Box>
  );
}
