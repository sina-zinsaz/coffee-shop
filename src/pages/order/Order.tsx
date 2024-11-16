import { Container } from "@mui/material";
import Title from "../../components/Title";
import Hr from "../../components/Hr";
import Head from "./components/Head";
import Tab from "./components/Tab";
import Address from "./components/address/Address";
import NumOfProductOrder from "./components/numOfProductOrder/NumOfProductOrder";
import DiscountBox from "./components/DiscountBox";
import Price from "./components/Price";
import DeliveryFee from "./components/DeliveryFee";
import TotalPayment from "./components/TotalPayment";
import Navigation from "./components/navigation/Navigation";

export default function Order() {
  return (
    <>
      <Container>
        <Head />
        <Tab />
        <Address />
        <Hr my="15px" border="1px #EAEAEA solid" />
        <NumOfProductOrder />
      </Container>
      <Hr my="15px" border="3px #EAEAEA solid" />
      <Container>
        <DiscountBox />
        <Title title="Payment Summary" fontSize={1} />
        <Price />
        <DeliveryFee />
        <Hr my="10px" border="1px #EAEAEA solid" />
        <TotalPayment />
        <Navigation />
      </Container>
    </>
  );
}
