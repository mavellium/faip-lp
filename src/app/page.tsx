import Image from "next/image";
import Form from "../components/Form";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Form></Form>
      <Footer></Footer>
      <ButtonWhatsapp></ButtonWhatsapp>
      </>
  );
}
