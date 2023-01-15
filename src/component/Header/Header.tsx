import React from "react";
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderNav from "./HeaderNav/HeaderNav";
import { styled } from "@mui/material";

const Header = () => {
  return (
    <HeaderSC>
      <WrapperSC className="container">
        <HeaderContacts />
        <HeaderNav />
      </WrapperSC>
    </HeaderSC>
  );
};

const HeaderSC = styled("header")`
  top: 0;
  position: sticky;
  z-index: 1000;
  border-bottom: 2px solid #ffffff;
  padding-bottom: 10px;
  background-color: #2c2c2c;
`;

const WrapperSC = styled("section")``;

export default React.memo(Header);
