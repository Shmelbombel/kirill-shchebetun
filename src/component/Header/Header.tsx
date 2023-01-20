import React from "react";
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderNav from "./HeaderNav/HeaderNav";
import { styled } from "@mui/material";
import { ContainerSC } from "UI/StyledComponents/ContainerSC";

const Header = () => {
  return (
    <HeaderSC>
      <ContainerSC className="container">
        <HeaderContacts />
        <HeaderNav />
      </ContainerSC>
    </HeaderSC>
  );
};

const HeaderSC = styled("header")`
  top: 0;
  position: sticky;
  z-index: 1000;
  border-bottom: 2px solid #979f70;
  padding-bottom: 10px;
  background-color: #2c2c2c;
`;

const WrapperSC = styled("section")``;

export default React.memo(Header);
