import React from "react";
import { SectionSC } from "UI/StyledComponents/SectionSC";
import SectionTitleUI from "UI/SectionTitleUI/SectionTitleUI";
import { websiteNavObj } from "lib/mock/websiteNav";
import { styled } from "@mui/material";
import ContactsForm from "./ContactsForm/ContactsForm";

const Contacts = () => {
  return (
    <SectionSC>
      <SectionTitleUI href={websiteNavObj.Contacts.href}>
        {websiteNavObj.Contacts.title}
      </SectionTitleUI>
      <WrapperSC>
        <ContactsForm />
      </WrapperSC>
    </SectionSC>
  );
};

const WrapperSC = styled("div")`
  display: flex;
  justify-content: center;
`;
export default React.memo(Contacts);
