import React, { FC } from "react";
import { styled } from "@mui/material";

interface IAboutItemProps {
  title: string;
  Icon: FC;
}

const AboutItem = ({ title, Icon }: IAboutItemProps) => {
  return (
    <ContainerSC>
      <Icon />
      <TitleSC>{title}</TitleSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  flex-grow: 1;
  border: 3px solid #ffffff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  & > svg {
    width: 100px;
    height: 100px;
    margin-right: 25px;
  }
  @media (max-width: 1024px) {
    & > svg {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }
`;
const TitleSC = styled("p")`
  font-size: 22px;
  width: 100%;
  max-width: 500px;
  @media (max-width: 1410px) {
    font-size: 18px;
    max-width: 400px;
  }
  @media (max-width: 1210px) {
    max-width: 350px;
  }
  @media (max-width: 1210px) {
    max-width: 300px;
  }
  @media (max-width: 1024px) {
    max-width: 300px;
  }
  @media (max-width: 900px) {
    width: 100%;
    max-width: none;
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export default React.memo(AboutItem);
