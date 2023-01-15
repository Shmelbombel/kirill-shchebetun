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
          Город: {authorMock.address.city}
          {"\n"}Улица: {authorMock.address.street}
          {"\n"}Офис: {authorMock.address.officeNumber}
        </AddressSC>
      </ParagraphSC>
    </div>
  );
};

const LogoContainerSC = styled("div")`
  margin-bottom: 30px;
`;

const ParagraphSC = styled("p")`
  font-size: 22px;
  max-width: 300px;
  white-space: pre-wrap;
`;

const AddressSC = styled("address")`
  color: gray;
  font-style: inherit;
`;

export default React.memo(FooterInfo);
