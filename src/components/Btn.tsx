import { Box } from "@mui/material";
import { btn } from "../interfaces/btn";

export default function Btn({ Title, sx, onClick }: btn) {
  return (
    <Box component="button" onClick={onClick} sx={sx}>
      {Title}
    </Box>
  );
}
