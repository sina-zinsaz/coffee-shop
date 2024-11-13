import { InputBase } from "@mui/material";

export default function InputSearch() {
  return (
    <InputBase
      sx={{
        ml: 1,
        flex: 1,
        "&::placeholder": { color: "white" },
        color: "white",
        fontSize: "large",
      }}
      placeholder="جستجوی قهوه"
      inputProps={{ "aria-label": "search google maps" }}
    />
  );
}
