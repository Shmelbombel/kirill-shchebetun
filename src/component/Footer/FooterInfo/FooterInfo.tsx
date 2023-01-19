import React from "react";
import LogoIcon from "../../../assets/icons/LogoIcon/LogoIcon";
import { styled } from "@mui/material";
import { authorMock } from "lib/mock/authorMock";

const FooterInfo = () => {
  return (
    <div>
      <LogoContainerSC>
        <LogoIcon />
      </LogoContainerSC>
      <ParagraphSC>
        <AddressSC>
          <span>Город:</span> {authorMock.address.city}
          {"\n"}
          <span>Улица:</span> {authorMock.address.street}
          {"\n"}
          <span>Офис:</span> {authorMock.address.officeNumber}
        </AddressSC>
      </ParagraphSC>
    </div>
  );
};

const LogoContainerSC = styled("div")`
  margin-bottom: 30px;
  @media (max-width: 1100px) {
    & > svg {
      width: 200px;
      height: 50px;
    }
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    & > svg {
      width: 150px;
      height: 50px;
    }
  }
`;

const ParagraphSC = styled("p")`
  font-size: 22px;
  max-width: 300px;
  white-space: pre-wrap;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const AddressSC = styled("address")`
  color: #ffffff;
  font-style: inherit;
  & > span {
    color: #979f70;
  }
`;

export default React.memo(FooterInfo);
