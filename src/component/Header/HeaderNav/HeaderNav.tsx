import React, { useEffect, useMemo, useState } from "react";
import { websiteNavArr } from "lib/mock/websiteNav";
import { styled } from "@mui/material";

const HeaderNav = () => {
  return (
    <NavSC>
      <UlSC>
        {websiteNavArr.map((websiteNavItem) => (
          <li key={websiteNavItem.title}>
            <ASC href={websiteNavItem.href}>{websiteNavItem.title}</ASC>
          </li>
        ))}
      </UlSC>
    </NavSC>
  );
};

const NavSC = styled("nav")``;
const UlSC = styled("ul")`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
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
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    background-color: #b9c285;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export default React.memo(HeaderNav);
