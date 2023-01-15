import React, { FC } from "react";
import { styled } from "@mui/material";

interface ILinkButtonUIProps {
  title: string;
  href: string;
  color: string;
  Icon?: FC;
  isOpenNewTab?: boolean;
}

const LinkButtonUI = ({
  title,
  href,
  color,
  Icon,
  isOpenNewTab = true,
}: ILinkButtonUIProps) => {
  return (
    <LinkSC
      color={color}
      href={href}
      {...(isOpenNewTab ? { target: "_blank", rel: "noreferrer" } : {})}>
      {Icon && <Icon />}
      {title}
    </LinkSC>
  );
};

const LinkSC = styled("a")<{ color: string }>`
  min-width: 120px;
  background-color: ${({ color }) => color};
  padding: 10px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s all linear;

  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export default React.memo(LinkButtonUI);
