import React from "react";
import { Box, Divider, Input } from "@mui/material";
import ConversaionField from "./ConversaionField";
import MoneyField from "./MoneyField";
import MenuCurrency from "./MenuCurrency";

const CurrencyForm = ({
  text,
  currenciesList,
  currency,
  money,
  convertInfo,
  onSelect,
  onChangeValue,
}) => {
  const inputChange = ({ target }) => {
    onChangeValue(target.value);
  };

  return (
    <Box>
      <Input disableUnderline={true} disabled value={text} sx={{ border: 0 }} />
      <Box
        sx={{
          height: 200,
          maxWidth: 400,
          border: 2,
          borderColor: "#CDCDCD",
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            height: 44,
            maxWidth: 400,
            display: "flex",
            borderBottom: 2,
            borderColor: "inherit",
          }}
        >
          <Input
            id="long-text"
            disabled
            defaultValue="Выберите валюту"
            disableUnderline={true}
            value={currency.CharCode}
            sx={{ flexGrow: 1, ml: 2, border: 0, color: "#71767A" }}
          />
          <Divider
            orientation="vertical"
            sx={{ border: 1, borderColor: "inherit" }}
          />
          <MenuCurrency
            currenciesList={currenciesList}
            currency={currency}
            onSelect={onSelect}
          />
        </Box>
        <Box sx={{ marginLeft: "22px" }}>
          <MoneyField money={money} inputChange={inputChange} />
          <ConversaionField convertInfo={convertInfo} />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(CurrencyForm);
