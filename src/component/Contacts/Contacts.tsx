import React from "react";
import { SectionSC } from "UI/StyledComponents/SectionSC";
import SectionTitleUI from "UI/SectionTitleUI/SectionTitleUI";
import { websiteNavArr, websiteNavObj } from "lib/mock/websiteNav";
import { styled } from "@mui/material";
import ContactsForm from "./ContactsForm/ContactsForm";
import { ContainerSC } from "UI/StyledComponents/ContainerSC";

const Contacts = () => {
  return (
    <ContainerSC>
      <SectionSC>
        <SectionTitleUI>{websiteNavObj.Contacts.title}</SectionTitleUI>
        <WrapperSC>
          <ContactsForm />
        </WrapperSC>
      </SectionSC>
    </ContainerSC>
  );
};

const WrapperSC = styled("div")`
  display: flex;
  justify-content: center;
`;
export default React.memo(Contacts);
