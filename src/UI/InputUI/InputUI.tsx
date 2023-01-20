import { styled, TextField } from "@mui/material";

export const InputUI = styled(TextField)`
  display: block;
  width: 100%;
  & > .MuiInputBase-root {
    width: inherit;
    border-radius: 20px;
    & > .MuiInputBase-input {
      font-family: inherit;
      font-size: 18px;
      border: 3px solid #979f70;
      border-radius: inherit;
    }
  }
`;
