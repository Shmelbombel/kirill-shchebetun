import React from "react";
import { SectionSC } from "UI/StyledComponents/SectionSC";
import SectionTitleUI from "UI/SectionTitleUI/SectionTitleUI";
import { websiteNavObj } from "lib/mock/websiteNav";
import AboutItem from "./AboutItem/AboutItem";
import { authorMock } from "lib/mock/authorMock";
import GavelIcon from "@mui/icons-material/Gavel";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { styled } from "@mui/material";

const About = () => {
  return (
    <SectionSC>
      <SectionTitleUI href={websiteNavObj.About.href}>
        {websiteNavObj.About.title}
      </SectionTitleUI>
      <WrapperSC>
        <AboutItem title={authorMock.about.one} Icon={GavelIcon} />
        <AboutItem title={authorMock.about.two} Icon={WorkOutlineIcon} />
        <AboutItem title={authorMock.about.three} Icon={SchoolIcon} />
        <AboutItem title={authorMock.about.four} Icon={HandshakeIcon} />
      </WrapperSC>
    </SectionSC>
  );
};

const WrapperSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & > *:nth-of-type(odd) {
    margin-right: 30px;
  }
  & > *:nth-of-type(-n + 2) {
    margin-bottom: 30px;
  }
  margin-bottom: 30px;
`;

export default React.memo(About);
