import { Container } from "@mui/material";
import type { NextPage } from "next";
import ProductsList from "../components/ProductsList";

const Home: NextPage = () => {
  return (
    <Container>
      <ProductsList />
    </Container>
  );
};

export default Home;
