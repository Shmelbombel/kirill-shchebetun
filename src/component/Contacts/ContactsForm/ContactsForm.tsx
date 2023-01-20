import React, { ChangeEvent, useState } from "react";
import { InputUI } from "UI/InputUI/InputUI";
import { TextAreaUI } from "UI/TextAreaUI/TextAreaUI";
import { CircularProgress, Dialog, styled } from "@mui/material";
import { useController, UseControllerReturn, useForm } from "react-hook-form";
import { ButtonSC } from "UI/StyledComponents/ButtonSC";
import { telephoneMask } from "lib/services";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import { authorMock } from "lib/mock/authorMock";
import emailjs from "@emailjs/browser";
import { EMAIL_JS } from "../../../lib/constants/constants";

interface IFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactsForm = () => {
  const [modal, setModal] = useState<"success" | "error" | "loading" | "">("");

  const formMethods = useForm<IFormState>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const { handleSubmit, control, reset } = formMethods;

  const nameController = useController({ control, name: "name" });
  const emailController = useController({ control, name: "email" });
  const phoneController = useController({ control, name: "phone" });
  const messageController = useController({ control, name: "message" });

  const onSubmit = (data: IFormState) => {
    document.body.style.overflowX = "hidden";
    setModal("loading");
    emailjs
      .send(
        EMAIL_JS.serviceID,
        EMAIL_JS.templateID,
        data as any,
        EMAIL_JS.publicKey,
      )
      .then(() => {
        setModal("success");
        reset({});
      })
      .catch(() => {
        setModal("error");
        reset({});
      });
  };

  const handleCloseModal = () => {
    document.body.style.overflowX = "scroll";
    setModal("");
  };
  const handleChange =
    (controller: UseControllerReturn<any, any>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      controller.field.onChange(e.target.value);
    };

  return (
    <FormSC onSubmit={handleSubmit(onSubmit)}>
      <FomItemSC>
        <FormTextSC>Имя</FormTextSC>
        <InputUI
          name="name"
          value={nameController.field.value}
          onChange={handleChange(nameController)}
          required={true}
        />
      </FomItemSC>
      <FomItemSC>
        <FormTextSC>Номер телефона</FormTextSC>
        <InputUI
          name="phone"
          placeholder="+7 ( _ _ _ ) ___-__-__"
          value={phoneController.field.value}
          onChange={(e) =>
            phoneController.field.onChange(telephoneMask(e.target.value))
          }
          required={true}
        />
      </FomItemSC>
      <FomItemSC>
        <FormTextSC>Почта</FormTextSC>
        <InputUI
          name="email"
          value={emailController.field.value}
          onChange={handleChange(emailController)}
          required={true}
        />
      </FomItemSC>
      <FomItemSC>
        <FormTextSC>Сообщение</FormTextSC>
        <TextAreaUI
          multiline={true}
          maxRows={5}
          value={messageController.field.value}
          onChange={handleChange(messageController)}
        />
      </FomItemSC>
      <CustomButtonSC type="submit" fullWidth variant="outlined">
        Получить услугу
      </CustomButtonSC>
      <Dialog
        disableScrollLock={true}
        open={modal === "success"}
        onClose={handleCloseModal}>
        <ModalContainerSC>
          <SuccessIcon />
          <ModalTitleSC>
            Спасибо. Услуга на рассмотрении!{"\n"} В ближайшее время с Вами
            свяжутся.
          </ModalTitleSC>
        </ModalContainerSC>
      </Dialog>
      <Dialog
        disableScrollLock={true}
        open={modal === "error"}
        onClose={handleCloseModal}>
        <ModalContainerSC>
          <ErrorIconSC />
          <ModalTitleSC>
            Что-то пошло не так.{"\n"} Свяжитесь напрямую{" "}
            <ModalHrefSC href={`tel:${authorMock.phone.normal}`}>
              {" "}
              {authorMock.phone.format}
            </ModalHrefSC>
            <ModalHrefSC href={`mailto:${authorMock.email}`}>
              {authorMock.email}
            </ModalHrefSC>
          </ModalTitleSC>
        </ModalContainerSC>
      </Dialog>
      <Dialog disableScrollLock={true} open={modal === "loading"}>
        <ModalContainerSC style={{ padding: "50px" }}>
          <CircularProgress size={60} />
        </ModalContainerSC>
      </Dialog>
    </FormSC>
  );
};

const ModalHrefSC = styled("a")`
  margin-top: 10px;
  color: #979f70;
  text-decoration: underline;
`;

const FormSC = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  & > *:last-child {
    margin-bottom: 0;
  }
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

const CustomButtonSC = styled(ButtonSC)`
  margin-top: 20px;
  max-width: 250px;
  font-size: 18px;
  background-color: transparent;
  padding: 15px 20px;

  border: 3px solid #b9c285;
  &:hover {
    border: 3px solid #b9c285;
    background-color: transparent;
  }
`;

const ModalContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  & > div {
    font-size: 30px;
  }
`;

const ModalTitleSC = styled("h2")`
  text-align: center;
  white-space: pre-wrap;
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
    white-space: normal;
  }
`;

const SuccessIcon = styled(CheckCircleOutlineIcon)`
  width: 200px;
  height: 200px;
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

const ErrorIconSC = styled(ErrorIcon)`
  width: 200px;
  height: 200px;
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

export default React.memo(ContactsForm);
