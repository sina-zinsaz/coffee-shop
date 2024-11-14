import { Box } from "@mui/material";
import { btn } from "../interfaces/btn";

export default function Btn({
  Title,
  px,
  py,
  bgcolor,
  color,
  width,
  height,
  fontSize,
  border,
  borderRadius,
  mb,
  onClick,
}: btn) {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        bgcolor: `#${bgcolor}`,
        color: { color },
        fontWeight: "bold",
        border: "none",
        py: `${py}%`,
        px: `${px}%`,
        borderRadius: { borderRadius },
      }}
      width={width}
      height={height}
      fontSize={fontSize}
      border={border}
      mb={mb}
    >
      {Title}
    </Box>
  );
}
