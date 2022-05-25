import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnDark";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Pricing />
      
      <Footer/>
    </AnimationRevealPage>
  );
};
