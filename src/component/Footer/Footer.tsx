import React from "react";
import { styled } from "@mui/material";
import FooterSocial from "./FooterSocial/FooterSocial";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterNav from "./FooterNav/FooterNav";
import FooterAbout from "./FooterAbout/FooterAbout";

const Footer = () => {
  return (
    <FooterSC>
      <WrapperSC className="container">
        <FooterInfo />
        <FooterAbout />
        <FooterNav />
        <FooterSocial />
      </WrapperSC>
    </FooterSC>
  );
};

const FooterSC = styled("footer")`
  border-top: 2px solid #979f70;
  background-color: #2c2c2c;
  padding: 20px 0 20px;
`;

const WrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const FooterSectionTitleSC = styled("h4")`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export default React.memo(Footer);
