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
      <a href="/">
        <LogoIcon />
      </a>
      <WrapperSC>
        <EmailSC href={`mailto:${authorMock.email}`}>
          {authorMock.email}
        </EmailSC>
        <PhoneSC href={`tel:${authorMock.phone.normal}`}>
          {authorMock.phone.format}
        </PhoneSC>
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
      </WrapperSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0;
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
