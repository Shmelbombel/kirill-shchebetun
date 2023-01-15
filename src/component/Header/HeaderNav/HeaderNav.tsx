import React from "react";
import { headerNav } from "lib/mock/headerNav";
import { styled } from "@mui/material";

const HeaderNav = () => {
  return (
    <NavSC>
      <UlSC>
        {headerNav.map((headerNavItem) => (
          <li key={headerNavItem.href}>
            <ASC href={headerNavItem.href}>{headerNavItem.title}</ASC>
          </li>
        ))}
      </UlSC>
    </NavSC>
  );
};

const NavSC = styled("nav")``;
const UlSC = styled("ul")`
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > * {
    margin-right: 20px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const ASC = styled("a")`
  font-size: 20px;
  position: relative;
  padding-bottom: 5px;
  transition: 0.2s all linear;

  &:hover {
    color: #b9c285;

    &:after {
      opacity: 1;
    }
  }

  &::after {
    transition: 0.2s all linear;
    content: "";
    position: absolute;
    left: -10%;
    bottom: -1.5px;
    width: 120%;
    height: 2px;
    opacity: 0;
    background-color: #b9c285;
  }
`;

export default React.memo(HeaderNav);
