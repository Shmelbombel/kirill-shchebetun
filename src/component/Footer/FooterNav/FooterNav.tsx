import React from "react";
import { styled } from "@mui/material";
import { headerNav } from "lib/mock/headerNav";
import { FooterSectionTitleSC } from "../Footer";

const FooterNav = () => {
  return (
    <div>
      <FooterSectionTitleSC>Быстрый доступ:</FooterSectionTitleSC>
      <NavSC>
        <UlSC>
          {headerNav.map((headerItemNav) => (
            <LiSC key={headerItemNav.href}>
              <ASC href={headerItemNav.href}>{headerItemNav.title}</ASC>
            </LiSC>
          ))}
        </UlSC>
      </NavSC>
    </div>
  );
};

const NavSC = styled("nav")``;
const UlSC = styled("ul")`
  & > * {
    margin-bottom: 10px;
  }
  & > *:last-child {
    margin-bottom: 10px;
  }
`;
const LiSC = styled("li")``;

const ASC = styled("a")`
  font-size: 16px;
  transition: 0.2s all linear;
  text-decoration: underline;
  &:hover {
    color: #979f70;
  }
`;

export default React.memo(FooterNav);
