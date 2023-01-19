import React from "react";
import { styled } from "@mui/material";
import { websiteNavArr } from "lib/mock/websiteNav";
import { FooterSectionTitleSC } from "../Footer";

const FooterNav = () => {
  return (
    <ContainerSC>
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
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  @media (max-width: 500px) {
    padding-top: 8px;
    max-width: 160px;
    text-align: right;
  }
`;

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
