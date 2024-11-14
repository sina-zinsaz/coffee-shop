import { Box, Typography } from "@mui/material";

export default function Description() {
  return (
    <>
      <Typography fontSize="0.8rem" color="#9B9B9B" mt="5px">
        کاپوچینو یک نوشیدنی تقریباً 150 میلی لیتری (5 اونس) با 25 میلی لیتر قهوه
        اسپرسو و 85 میلی لیتر شیر تازه
        <Box component="span" color="#C67C4E" fontWeight="bold">
          {" "}
          ادامه مطلب
        </Box>
      </Typography>
    </>
  );
}
