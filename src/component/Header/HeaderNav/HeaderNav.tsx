import React, { useEffect, useMemo, useState } from "react";
import { websiteNavArr } from "lib/mock/websiteNav";
import { styled } from "@mui/material";
import { useHeaderNav } from "./useHeaderNav";

const HeaderNav = () => {
  const { onClick } = useHeaderNav();

  return (
    <NavSC>
      <UlSC>
        {websiteNavArr.map((websiteNavItem, index) => (
          <li key={websiteNavItem.title}>
            <ASC onClick={onClick(index + 1)} href={websiteNavItem.href}>
              {websiteNavItem.title}
            </ASC>
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
`;

export default React.memo(HeaderNav);
