import React from "react";
import { styled } from "@mui/material";
import FooterSocial from "./FooterSocial/FooterSocial";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterNav from "./FooterNav/FooterNav";
import FooterAbout from "./FooterAbout/FooterAbout";
import { ContainerSC } from "UI/StyledComponents/ContainerSC";

const Footer = () => {
  return (
    <FooterSC>
      <CustomContainerSC>
        <FooterInfo />
        <FooterAbout />
        <FooterNav />
        <FooterSocial />
      </CustomContainerSC>
    </FooterSC>
  );
};

const FooterSC = styled("footer")`
  border-top: 2px solid #979f70;
  background-color: #2c2c2c;
  padding: 20px 0 20px;
`;

const CustomContainerSC = styled(ContainerSC)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    & > * {
      width: 50%;
      margin-bottom: 20px;
    }
    & > *:nth-of-type(even) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    flex-wrap: wrap;
  }
`;

export const FooterSectionTitleSC = styled("h4")`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export default React.memo(Footer);
