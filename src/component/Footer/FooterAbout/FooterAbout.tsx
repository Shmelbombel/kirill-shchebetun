import React from "react";
import { FooterSectionTitleSC } from "../Footer";
import { styled } from "@mui/material";
import { authorMock } from "lib/mock/authorMock";

const FooterAbout = () => {
  return (
    <ContainerSC>
      <FooterSectionTitleSC>Обо мне:</FooterSectionTitleSC>
      <ParagraphSC>
        {authorMock.FIO}
        {"\n"}
        {"\n"}
        {authorMock.about.one}
        {"\n"}
        {"\n"}
        {authorMock.about.two}
        {"\n"}
        {"\n"}
        {authorMock.about.three}
      </ParagraphSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  @media (max-width: 850px) {
    max-width: 350px;
  }
  @media (max-width: 500px) {
    display: none !important;
    background-color: red;
  }
`;

const ParagraphSC = styled("p")`
  max-width: 350px;
  white-space: pre-wrap;
  @media (max-width: 1100px) {
    max-width: 250px;
    font-size: 14px;
  }
  @media (max-width: 850px) {
    max-width: none;
    font-size: 14px;
  }
`;

export default React.memo(FooterAbout);
