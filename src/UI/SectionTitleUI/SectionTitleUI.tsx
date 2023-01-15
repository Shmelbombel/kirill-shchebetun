import React, { ReactNode } from "react";
import { styled } from "@mui/material";

interface ISectionTitleUIProps {
  children: ReactNode;
  href: string;
}

const SectionTitleUI = ({ href, children }: ISectionTitleUIProps) => {
  return <TitleSC id={href.slice(1)}>{children}</TitleSC>;
};

export const TitleSC = styled("h1")`
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
`;

export default React.memo(SectionTitleUI);
