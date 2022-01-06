import React from "react";
import {
  DiFirebase,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiZend,
} from "react-icons/di";
import { SiAffinity, SiNextDotJs, SiTailwindcss } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech" nopadding>
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies from Front-end to Back-end in the
      web development space
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="6rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="8rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="5rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size="5rem" />
        <ListContainer>
          <ListTitle>React Framework</ListTitle>
          <ListParagraph>
            Worked with <br />
            Next Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size="5rem" />
        <ListContainer>
          <ListTitle>CSS Framework</ListTitle>
          <ListParagraph>
            Worked with <br />
            TailwindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAffinity size="4rem" />
        <ListContainer>
          <ListTitle>Unified Content Platform</ListTitle>
          <ListParagraph>
            Worked with <br />
            Sanity.io
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
