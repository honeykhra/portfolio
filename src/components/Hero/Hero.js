import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { AiOutlineGithub } from "react-icons/ai";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio Website
      </SectionTitle>
      <SectionText>
        The purpose of this website is to showcase the projects I have done
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/honeykhra")}
      >
        Github <AiOutlineGithub/>
      </Button>
    </LeftSection> 
  </Section>
);

export default Hero;
