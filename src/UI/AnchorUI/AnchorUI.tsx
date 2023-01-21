import React from "react";
import { styled } from "@mui/material";
import { websiteNavArr } from "lib/mock/websiteNav";

interface IAnchorUIProps {
  href: string;
}
const AnchorUI = ({ href }: IAnchorUIProps) => {
  return <ContainerSC id={href.slice(1)} />;
};

const ContainerSC = styled("div")`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 104px;
  @media (max-width: 900px) {
    height: 75px;
  }
  @media (max-width: 802px) {
    height: 85px;
  }
  @media (max-width: 595px) {
    height: 75px;
  }
  @media (max-width: 530px) {
    height: 128px;
  }
`;

export default AnchorUI;
