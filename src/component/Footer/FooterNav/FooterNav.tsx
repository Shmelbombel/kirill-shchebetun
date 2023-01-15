import React from "react";
import { styled } from "@mui/material";
import { websiteNavArr } from "lib/mock/websiteNav";
import { FooterSectionTitleSC } from "../Footer";

const FooterNav = () => {
  return (
    <div>
      <FooterSectionTitleSC>Быстрый доступ:</FooterSectionTitleSC>
      <NavSC>
        <UlSC>
          {websiteNavArr.map((websiteNavItem) => (
            <LiSC key={websiteNavItem.title}>
              <ASC href={websiteNavItem.href}>{websiteNavItem.title}</ASC>
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
