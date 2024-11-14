import { Box } from "@mui/material";
import Description from "./components/Description";
import Rank from "./components/Rank";
import Option from "./components/Option";

export default function ProductDetail({
  description,
  rank,
}: {
  description: string;
  rank: number;
}) {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Description description={description} />
          <Rank rank={rank} />
        </Box>
        <Option />
      </Box>
    </>
  );
}
