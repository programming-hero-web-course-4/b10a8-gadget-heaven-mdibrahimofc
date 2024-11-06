import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../HeroSection/HeroSection";
import CompanyStories from "../CompanyStories/CompanyStories";
import MissionVision from "../MissionVision/MissionVision";
import TeamProfiles from "../teamMembers/teamMembers";
import CoreValues from "../coreValues/CoreValues";
import BehindTheScenes from "../BehindTheScenes/BehindTheScenes";
import CallAction from "../CallAction/CallAction";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Gadget Heaven</title>
        <meta
          name="description"
          content="This is the home page of my React app."
        />
      </Helmet>

      <HeroSection></HeroSection>
      <CompanyStories></CompanyStories>
      <MissionVision></MissionVision>
      <TeamProfiles></TeamProfiles>
      <CoreValues></CoreValues>
      <BehindTheScenes></BehindTheScenes>
      <CallAction></CallAction>
    </div>
  );
};

export default AboutUs;
