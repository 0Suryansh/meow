import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {
  Container,
  Content2Xl,
} from "components/misc/Layouts";
import Hero from "./components/hero/TwoColumnWithInput";
import Feature from './components/features/DashedBorderSixFeatures'
import Footer from './components/footers/FiveColumnDark';
import Cards from './components/cards/ThreeColSlider'
import Features2 from './components/features/ThreeColSimple'
import Features3 from './components/features/TwoColSingleFeatureWithStats2'
import Features4 from './components/features/TwoColWithTwoHorizontalFeaturesAndButton'
import NewsLetter from './components/forms/SimpleSubscribeNewsletter'
export default () => {
  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <Hero />
          <Feature/>
          <Features3/>
          <Features4/>
          <Features2/>
          {/* <Cards/> */}
          <NewsLetter/>
          <Footer/>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
