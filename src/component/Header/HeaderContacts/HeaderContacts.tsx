import React from "react";
import { styled } from "@mui/material";
import LinkButtonUI from "UI/LinkButtonUI/LinkButtonUI";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { authorMock } from "lib/mock/authorMock";
import LogoIcon from "../../../assets/icons/LogoIcon/LogoIcon";

const HeaderContacts = () => {
  return (
    <ContainerSC>
      <LogoLinkASC href="/">
        <LogoIcon />
      </LogoLinkASC>
      <WrapperSC>
        <ContactContainerSC>
          <EmailSC href={`mailto:${authorMock.email}`}>
            {authorMock.email}
          </EmailSC>
          <PhoneSC href={`tel:${authorMock.phone.normal}`}>
            {authorMock.phone.format}
          </PhoneSC>
        </ContactContainerSC>
        <ContactContainerSC>
          {authorMock?.whatsapp && (
            <LinkButtonUI
              title={authorMock.whatsapp.title}
              href={authorMock.whatsapp.href}
              color={authorMock.whatsapp.color}
              Icon={WhatsAppIcon}
            />
          )}
          {authorMock?.telegram && (
            <LinkButtonUI
              title={authorMock.telegram.title}
              href={authorMock.telegram.href}
              color={authorMock.telegram.color}
              Icon={TelegramIcon}
            />
          )}
        </ContactContainerSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const LogoLinkASC = styled("a")`
  margin-right: 30px;
  @media (max-width: 900px) {
    & > svg {
      width: 200px;
      height: 40px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 600px) {
    & > svg {
      width: 150px;
      height: 30px;
    }
  }
`;

const ContactContainerSC = styled("div")`
  display: flex;
  & > * {
    margin-right: 20px;
  }
  & > *:last-child {
    margin-right: 0;
  }
  @media (max-width: 595px) {
    width: 100%;
    justify-content: space-between;
    margin-right: 0;
  }
`;

const ContainerSC = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WrapperSC = styled(ContainerSC)`
  display: flex;
  justify-content: space-between;
  & > * {
    margin-right: 20px;
  }
  & > *:last-child {
    margin-right: 0;
  }
  @media (max-width: 900px) {
    padding-top: 0;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }

  @media (max-width: 595px) {
    padding-top: 10px;
    & > *:first-child {
      margin-bottom: 10px;
    }
  }
`;

const LogoLinkSC = styled("a")`
  cursor: pointer;
`;

const PhoneSC = styled("a")`
  position: relative;
`;

const EmailSC = styled("a")`
  color: #9b9696;
`;

export default React.memo(HeaderContacts);
