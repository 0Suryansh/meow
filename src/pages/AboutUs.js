import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
 import tw from "twin.macro";
// import styled from "styled-components"; //eslint-disable-line
// import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Footer from 'components/footers/FiveColumnDark'
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <MainFeature1
        subheading={<Subheading></Subheading>}
        heading="It's time to cut the carbon"
        buttonRounded={false}
        imageSrc="https://img.freepik.com/free-vector/illustration-human-avatar-with-environment_53876-17627.jpg?t=st=1653536837~exp=1653537437~hmac=d029bdadd69813b8328e9057333373d68a9d73a4be7741350955c9e62794e944&w=1060"
        description="Our planet Earth is staring at a significant environmental problem. Over the years, Climate Change has become the consequence of our activities. According to TIME Magazine, the world will eventually become inhospitable by 2050 if we do not reduce 
carbon emissions. 

Many countries like the United States, Canada, China and Japan are responsible for 50% of the greenhouse gas emissions. India is also steadily rising in the list, which is a cause for concern in the coming years"
      />
      <MainFeature1
        
        heading="Mission and Vision"
        buttonRounded={false}
        imageSrc="https://as2.ftcdn.net/v2/jpg/04/19/82/05/1000_F_419820551_EaGvdymgR8DxyuTP3Elw0yUtNTEKVTaa.jpg"
        textOnLeft={false}
        description="That is why we founded ZeroCarbon  in order to have a long-term influence. But we can't do it alone. Let's work together to bring climate change action to the next level.

Zero Carbon was founded by IIT Kanpur students. Zero carbon is a provider of carbon management software and consulting services that assists businesses in calculating, analyzing, managing, and reporting carbon emissions.
"
       
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer/>
    </AnimationRevealPage>
  );
};
