import { InputUI } from "UI/InputUI/InputUI";
import { styled } from "@mui/material";

export const TextAreaUI = styled(InputUI)`
  & > .MuiInputBase-root {
    height: 200px;
    padding: 0;
    & > textarea {
      height: 200px !important;
      padding: 20px;
      box-sizing: border-box;
    }
    & > fieldset {
    }
  }
`;
