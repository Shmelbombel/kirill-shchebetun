import React from "react";
import { FooterSectionTitleSC } from "../Footer";
import { styled } from "@mui/material";
import { authorMock } from "lib/mock/authorMock";

const FooterAbout = () => {
  return (
    <div>
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
    </div>
  );
};

const ParagraphSC = styled("p")`
  max-width: 350px;
  white-space: pre-wrap;
`;

export default React.memo(FooterAbout);
