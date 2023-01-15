import React from "react";
import { FooterSectionTitleSC } from "../Footer";
import { styled } from "@mui/material";

const FooterAbout = () => {
  return (
    <div>
      <FooterSectionTitleSC>Обо мне:</FooterSectionTitleSC>
      <ParagraphSC>
        Щебетун Кирилл Викторович.{"\n"}
        {"\n"}Занимаюсь финансами экономическими спорами
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        ("Банкротство физических лиц").{"\n"}
        {"\n"}Большой опыт в крупных юридических компаниях Российской Федерации.
        {"\n"}
        {"\n"}Есть высшие юридическое образование по базе Специалиста, срок
        обучения 6 лет.
      </ParagraphSC>
    </div>
  );
};

const ParagraphSC = styled("p")`
  max-width: 350px;
  white-space: pre-wrap;
`;

export default React.memo(FooterAbout);
