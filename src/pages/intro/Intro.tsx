import { Box } from "@mui/material";
import Background from "./components/Background";
import Title from "../../components/Title";
import Description from "../../components/Description";
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  const NextPage = () => {
    navigate("/home");
  };

  return (
    <>
      <Box bgcolor="black" width="100%" height="100vh">
        <Background />
        <Title
          fontSize={1.5}
          title="بوی قهوه به قدری زیباست که نمیتونه متعلق به این جهان باشه .️..! اونم کنار یار!"
          color="white"
          mx="2rem"
          textAlign="center"
        />
        <Description
          color="A9A9A9"
          fontSize="1.1rem"
          mx="3rem"
          my="3rem"
          textAlign="center"
          description="به کافه لرگ خوش اومدی:)"
        />
        <Box
          component="div"
          sx={{
            textAlign: "center",
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            mb: "1rem",
          }}
        >
          <Btn
            Title="بزن بریم"
            sx={{
              fontWeight: "bold",
              bgcolor: "#C67C4E",
              fontSize: "1.5rem",
              color: "white",
              width: "90%",
              py: "7%",
              borderRadius: "20px",
            }}
            onClick={NextPage}
          />
        </Box>
      </Box>
    </>
  );
}
