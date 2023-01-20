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
            <SocilaLinkSC>
              <LinkButtonUI
                title={authorMock.whatsapp.title}
                href={authorMock.whatsapp.href}
                color={authorMock.whatsapp.color}
                Icon={WhatsAppIcon}
              />
            </SocilaLinkSC>
          )}
          {authorMock?.telegram && (
            <SocilaLinkSC>
              <LinkButtonUI
                title={authorMock.telegram.title}
                href={authorMock.telegram.href}
                color={authorMock.telegram.color}
                Icon={TelegramIcon}
              />
            </SocilaLinkSC>
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
`;

const SocilaLinkSC = styled("div")`
  @media (max-width: 595px) {
    & > * {
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
    margin-right: 0 !important;
  }
`;

const ContainerSC = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0;
  @media (max-width: 595px) {
    flex-direction: row;
  }
  @media (max-width: 530px) {
    flex-wrap: wrap;
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
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
    flex-wrap: wrap;
    & > * {
      margin-right: 0;
    }
    & > *:nth-of-type(2) {
      margin-top: 5px;
    }
  }

  }
`;

const LogoLinkSC = styled("a")`
  cursor: pointer;
`;

const PhoneSC = styled("a")`
  position: relative;
  @media (max-width: 900px) {
    margin-right: 10px !important;
  }
  @media (max-width: 818px) {
    margin-right: 0px !important;
  }
`;

const EmailSC = styled("a")`
  color: #9b9696;
`;

export default React.memo(HeaderContacts);
