import React from "react";
import Header from "../../components/header/header.component";
import HomeA from "../../components/home/homeA.component";
import HomeB from "../../components/home/homeB.component";
import HomeC from "../../components/home/homeC.component";
import Work from "../../components/work/work.component";
import Footer from "../../components/footer/footer.component";

const HomePage = (props) => (
  <div>
    <Header />
    <HomeA />
    <HomeB />
    <HomeC />
    <Work />
    <Footer />
  </div>
);
export default HomePage;
