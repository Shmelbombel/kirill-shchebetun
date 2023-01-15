import React from "react";
import { authorMock } from "lib/mock/authorMock";
import LinkButtonUI from "UI/LinkButtonUI/LinkButtonUI";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { styled } from "@mui/material";

const FooterSocial = () => {
  return (
    <LinkContainerSC>
      <LinkContainerItemSC>
        {authorMock?.email && (
          <LinkButtonUI
            title={`Написатьㅤ`}
            href={`mailto:${authorMock.email}`}
            color="#168de2"
            Icon={EmailIcon}
            isOpenNewTab={false}
          />
        )}
        {authorMock?.phone?.normal && (
          <LinkButtonUI
            title="Позвонить"
            href={`tel:${authorMock.phone.normal}`}
            color="#25D366"
            Icon={LocalPhoneIcon}
            isOpenNewTab={false}
          />
        )}
      </LinkContainerItemSC>
      <LinkContainerItemSC>
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
      </LinkContainerItemSC>
    </LinkContainerSC>
  );
};

const LinkContainerSC = styled("div")`
  & > * {
    margin-bottom: 10px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const LinkContainerItemSC = styled("div")`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;

export default React.memo(FooterSocial);
