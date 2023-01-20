import React, { ReactNode } from "react";
import { styled } from "@mui/material";

interface ISectionTitleUIProps {
  children: ReactNode;
}

const SectionTitleUI = ({ children }: ISectionTitleUIProps) => {
  return <TitleSC>{children}</TitleSC>;
};

export const TitleSC = styled("h1")`
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 25px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export default React.memo(SectionTitleUI);
