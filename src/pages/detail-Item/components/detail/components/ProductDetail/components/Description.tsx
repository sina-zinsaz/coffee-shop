import { Typography } from "@mui/material";
export default function Description({ description }: { description: string }) {
  return (
    <Typography fontSize="0.8rem" color="#9B9B9B" mt="5px">
      {description}
    </Typography>
  );
}
