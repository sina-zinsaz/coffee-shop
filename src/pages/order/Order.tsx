import { Box, Typography } from "@mui/material";
import Navigation from "./components/Navigation";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AlarmIcon from "@mui/icons-material/Alarm";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Order() {
  const { statusOrder } = useContext(AppContext);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        width="8rem"
        height="8rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor={statusOrder === 3 ? "#FF5A5AD4" : "#57FF9A73"}
        borderRadius="50%"
        mt="4rem"
      >
        <Box
          component="svg"
          width="4rem"
          height="4rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {statusOrder === 3 ? (
            <Box
              component="path"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#FFF"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <>
              <Box
                component="circle"
                cx="12"
                cy="12"
                r="9"
                stroke="#2F2D2C"
                strokeWidth="0.8"
              />
              <Box
                component="path"
                d="M9 12.5L11 14.5L15 10"
                stroke="#2F2D2C"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </Box>
      </Box>
      <Typography variant="h5" mt="1rem">
        {statusOrder === 3
          ? "مرسی که اومدی پیشمون:)"
          : "سفارش با موفقیت دریافت شد:)"}
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" my="4rem">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: `${statusOrder >= 3 ? "none" : "1px solid #DADADA"}`,
            borderRadius: "50%",
            bgcolor: `${statusOrder >= 3 ? "#DADADA" : "#FFF"}`,
            width: "3rem",
            height: "3rem",
          }}
        >
          <CreditScoreOutlinedIcon />
        </Box>
        <Box
          component="hr"
          sx={{
            width: "30px",
            height: "5px",
            border: `${statusOrder >= 2 ? "none" : "1px solid #DADADA"}`,
            borderRight: "none",
            borderLeft: "none",
            backgroundColor: `${statusOrder >= 2 ? "#DADADA" : "#FFF"}`,
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: `${statusOrder >= 2 ? "none" : "1px solid #DADADA"}`,
            borderRadius: "50%",
            bgcolor: `${statusOrder >= 2 ? "#DADADA" : "#FFF"}`,
            width: "3rem",
            height: "3rem",
          }}
        >
          <NotificationsActiveOutlinedIcon />
        </Box>
        <Box
          component="hr"
          sx={{
            width: "30px",
            height: "5px",
            border: `${statusOrder >= 1 ? "none" : "1px solid #DADADA"}`,
            borderRight: "none",
            borderLeft: "none",
            backgroundColor: `${statusOrder >= 1 ? "#DADADA" : "#FFF"}`,
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: `${statusOrder >= 1 ? "none" : "1px solid #DADADA"}`,
            borderRadius: "50%",
            bgcolor: `${statusOrder >= 1 ? "#DADADA" : "#FFF"}`,
            width: "3rem",
            height: "3rem",
          }}
        >
          <AlarmIcon />
        </Box>
        <Box
          component="hr"
          sx={{
            width: "30px",
            height: "5px",
            border: "none",
            backgroundColor: "#DADADA",
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: "none",
            borderRadius: "50%",
            bgcolor: `${statusOrder >= 0 ? "#DADADA" : "#FFF"}`,
            width: "3rem",
            height: "3rem",
          }}
        >
          <SendOutlinedIcon />
        </Box>
      </Box>
      <Box
        borderRadius="20px"
        py="20px"
        px="30px"
        bgcolor={
          statusOrder === 0
            ? "#FBBE218F"
            : statusOrder === 1
            ? "#63E3FF8F"
            : statusOrder === 2
            ? "#57FF9A73"
            : statusOrder === 3
            ? "#FFDB5A33"
            : "#FFF"
        }
        mx="1rem"
        mt={statusOrder === 3 ? "1rem" : "3rem"}
      >
        {statusOrder === 0 ? (
          <>
            سفارشت با موفقیت ثبت شد؛ یه کوچولو منتظر بمون تا باریستامون سفارشت
            رو تایید کنه
            <SentimentSatisfiedAltIcon sx={{ fontSize: "1rem" }} />
          </>
        ) : statusOrder === 1 ? (
          <>
            سفارشت تایید شده و باریستا داره آمادش میکنه.. حدودا 15 دقیقه دیگه
            آمادس
            <SentimentSatisfiedAltIcon sx={{ fontSize: "1rem" }} />
          </>
        ) : statusOrder === 2 ? (
          <>
            سفارشت آماده شد رفیق:) یه چند لحظه منتظر بمون الان واست میارم سر میز
            <SentimentSatisfiedAltIcon sx={{ fontSize: "1rem" }} />
          </>
        ) : statusOrder === 3 ? (
          <Box textAlign="center">
            میدونستی که کافه لرگ بی اندازه دوسِت داره و همیشه از دیدنت خوشحال
            میشه؟
          </Box>
        ) : (
          ""
        )}
      </Box>
      {statusOrder === 3 ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            border="2px solid #DFDFDF"
            borderRadius="10px"
            p="10px"
            mt="2rem"
          >
            AV14PO
            <ContentCopyIcon sx={{ fontSize: "1.5rem", mr: "10px" }} />
          </Box>
          <Box textAlign="center" mx="5rem" mt="1rem">
            دفعه بعدی که اومدی با این کد تخفیف 10 درصد خریدت رو مهمون مایی:)
          </Box>
        </>
      ) : (
        <Navigation />
      )}
    </Box>
  );
}
