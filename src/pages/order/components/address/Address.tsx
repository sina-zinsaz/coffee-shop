import Title from "../../../../components/Title";
import { Box, Chip } from "@mui/material";
import Description from "../../../../components/Description";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export default function Address() {
  return (
    <Box>
      <Title title="Delivery Address" fontSize={1} />
      <Title title="Jl. Kpg Sutoyo" fontSize={0.9} mt="0.5rem" />
      <Description
        description="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai."
        my="0.5rem"
        color="808080"
        fontSize="0.8rem"
        textAlign="left"
      />
      <Box display="flex">
        <Chip
          icon={
            <BorderColorOutlinedIcon
              style={{ color: "#303336", fontSize: "15px" }}
            />
          }
          sx={{ px: "7px" }}
          label="Edit Address"
          variant="outlined"
        />
        <Chip
          icon={
            <ArticleOutlinedIcon
              style={{ color: "#303336", fontSize: "15px" }}
            />
          }
          sx={{ ml: "1rem", px: "7px" }}
          label="Add Note"
          variant="outlined"
        />
      </Box>
    </Box>
  );
}
