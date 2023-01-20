import React from "react";
import { SectionSC } from "UI/StyledComponents/SectionSC";
import { styled } from "@mui/material";
import { ButtonSC } from "UI/StyledComponents/ButtonSC";
import { ContainerSC } from "UI/StyledComponents/ContainerSC";
import AnchorUI from "UI/AnchorUI/AnchorUI";
import { websiteNavArr, websiteNavObj } from "lib/mock/websiteNav";

const Home = () => {
  return (
    <CustomContainerSC>
      <CustomSectionSC>
        <InfoContainerSC>
          <InnerInfoContainerSC>
            <TitleSC>Помощь в{"\n"}юридических вопросах</TitleSC>
            <CustomButtonSC href="#contacts" variant={"outlined"}>
              Связаться со мной
            </CustomButtonSC>
          </InnerInfoContainerSC>
        </InfoContainerSC>
        <ImageContainerSC>
          <ImagesSC src="/images/author_photo.jpg" alt="author_photo" />
        </ImageContainerSC>
        <AnchorUI href={websiteNavArr[0].href} />
      </CustomSectionSC>
    </CustomContainerSC>
  );
};

const CustomContainerSC = styled(ContainerSC)`
  @media (max-width: 960px) {
    padding: 0;
  }
`;

const InnerInfoContainerSC = styled("div")`
  @media (max-width: 1230px) {
    max-width: 320px;
  }
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding-bottom: 30px;
    padding-left: 15px;
    max-width: 600px;
  }
`;

const InfoContainerSC = styled("div")`
  @media (max-width: 960px) {
    position: absolute;
    //left: 0;
    //bottom: 15px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CustomSectionSC = styled(SectionSC)`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 120px);
  @media (max-width: 960px) {
    margin-top: 0;
  }
  @media (max-width: 900px) {
    height: calc(100vh - 147px);
  }
  @media (max-width: 900px) {
    height: calc(100vh - 75px);
  }
  @media (max-width: 802px) {
    height: calc(100vh - 85px);
  }
  @media (max-width: 595px) {
    height: calc(100vh - 75px);
  }
  @media (max-width: 531px) {
    height: calc(100vh - 128px);
  }
`;

const TitleSC = styled("h1")`
  font-size: 46px;
  text-transform: uppercase;
  white-space: pre-wrap;
  margin-bottom: 50px;
  margin-right: 10px;
  @media (max-width: 1350px) {
    font-size: 42px;
  }
  @media (max-width: 960px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
  @media (max-width: 350px) {
    font-size: 20px;
  }
`;

const ImageContainerSC = styled("div")`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 1230px) {
    width: 60%;
  }
  @media (max-width: 960px) {
    width: 100%;
    border-radius: 0;
  }
`;

const ImagesSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;
  max-height: 1280px;
  @media (max-width: 960px) {
    border-radius: 0;
  }
`;

const CustomButtonSC = styled(ButtonSC)`
  background-color: transparent;
  border: 3px solid #979f70;
  &:hover {
    background-color: transparent;
    border: 3px solid #979f70;
  }
  @media (max-width: 960px) {
    max-width: 300px;
    padding: 10px 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
    max-width: 250px;
    padding: 5px 10px;
  }
`;

export default React.memo(Home);
