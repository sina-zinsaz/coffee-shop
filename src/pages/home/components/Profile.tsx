import { Avatar, Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Profile() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my="2rem"
      mx="2%"
    >
      <Box>
        <Typography color="#B7B7B7">لوکیشن من</Typography>
        <Box display="flex" alignItems="center">
          <Typography
            color="#DDDDDD"
            sx={{ fontWeight: 600, fontSize: "20px" }}
          >
            کاشان، کافه لرگ
          </Typography>
          <IconButton>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Avatar
          sx={{ backgroundColor: "transparent", width: "5rem", height: "5rem" }}
          variant="rounded"
        >
          <Box
            component="img"
            src="https://s6.uupload.ir/files/user_0ek2.jpg"
            sx={{ width: "3.5rem", borderRadius: "10px" }}
          />
        </Avatar>
      </Box>
    </Box>
  );
}
