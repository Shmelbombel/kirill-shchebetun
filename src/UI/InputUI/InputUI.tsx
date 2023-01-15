import { styled, TextField } from "@mui/material";

export const InputUI = styled(TextField)`
  display: block;
  width: 100%;
  & > .MuiInputBase-root {
    width: inherit;
    border-radius: 20px;
    & > .MuiInputBase-input {
      border: 3px solid #979f70;
      border-radius: inherit;
    }
  }
`;
