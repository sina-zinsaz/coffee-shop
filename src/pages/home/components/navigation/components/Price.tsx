import { Box, Typography } from "@mui/material";

export default function Price({ price }: { price: number }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
    >
      <Typography fontSize="0.8rem" color="#9B9B9B" mt="5px">
        قیمت
      </Typography>
      <Typography fontSize="1rem" color="#C67C4E" fontWeight="bold">
        ريال {price}
      </Typography>
    </Box>
  );
}
