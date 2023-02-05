import { Input } from "@mui/material";
import React from "react";

const ConversaionField = ({ convertInfo }) => {
  return (
    <Input
      sx={{ marginTop: "36px", fontSize: "16px" }}
      disabled
      disableUnderline={true}
      value={convertInfo}
    />
  );
};

export default React.memo(ConversaionField);
