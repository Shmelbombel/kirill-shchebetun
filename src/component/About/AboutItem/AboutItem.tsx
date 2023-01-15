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
`;
const TitleSC = styled("p")`
  font-size: 22px;
  max-width: 500px;
`;

export default React.memo(AboutItem);
