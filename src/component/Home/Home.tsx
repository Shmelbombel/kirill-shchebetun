import React from "react";
import { SectionSC } from "UI/StyledComponents/SectionSC";
import { styled } from "@mui/material";
import { ButtonSC } from "UI/StyledComponents/ButtonSC";

const Home = () => {
  return (
    <CustomSectionSC>
      <div>
        <TitleSC>Помощь в{"\n"}юридических вопросах</TitleSC>
        <CustomButtonSC variant="outlined">Связаться со мной</CustomButtonSC>
      </div>
      <ImageContainerSC>
        <ImagesSC src="/images/author_photo.jpg" alt="author_photo" />
      </ImageContainerSC>
    </CustomSectionSC>
  );
};

const CustomSectionSC = styled(SectionSC)`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 120px);
`;

const TitleSC = styled("h1")`
  font-size: 46px;
  text-transform: uppercase;
  white-space: pre-wrap;
  margin-bottom: 50px;
`;

const ImageContainerSC = styled("div")`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const ImagesSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;
  max-height: 1280px;
`;

const CustomButtonSC = styled(ButtonSC)`
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

export default React.memo(Home);
