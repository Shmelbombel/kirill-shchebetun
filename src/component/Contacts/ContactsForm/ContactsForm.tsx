import React from "react";
import { InputUI } from "UI/InputUI/InputUI";
import { TextAreaUI } from "UI/TextAreaUI/TextAreaUI";
import { styled } from "@mui/material";

const ContactsForm = () => {
  return (
    <FormSC>
      <FomItemSC>
        <FormTextSC>Имя</FormTextSC>
        <InputUI name="name" />
      </FomItemSC>
      <FomItemSC>
        <FormTextSC>Номер телефона</FormTextSC>
        <InputUI name="phone" placeholder="+7 ( _ _ _ ) ___-__-__" />
      </FomItemSC>
      <FomItemSC>
        <FormTextSC>Почта</FormTextSC>
        <InputUI name="email" />
      </FomItemSC>
      <FomItemSC>
        <FormTextSC>Сообщение</FormTextSC>
        <TextAreaUI multiline={true} maxRows={5} />
      </FomItemSC>
    </FormSC>
  );
};

const FormSC = styled("form")`
  width: 100%;
  max-width: 500px;
`;

const FomItemSC = styled("div")`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const FormTextSC = styled("div")`
  font-size: 18px;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export default React.memo(ContactsForm);
