import { Input } from "@mui/material";
import React from "react";

const MoneyField = ({ money, inputChange }) => {
  return (
    <Input
      placeholder="Введите сумму"
      type="number"
      value={money}
      sx={{
        marginTop: "24px",
        fontSize: "36px",
        "& .MuiInput-input": {
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "none",
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: "none",
          },
        },
      }}
      disableUnderline={true}
      onChange={inputChange}
    />
  );
};

export default React.memo(MoneyField);
