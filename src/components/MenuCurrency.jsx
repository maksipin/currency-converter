import React, { useState } from "react";
import { IconButton, ListItemText, Menu, MenuItem } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";

const MenuCurrency = ({ currency, currenciesList, onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (id) => {
    const selectCurrency = currenciesList.find((i) => i.ID === id);
    onSelect(selectCurrency);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="long-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ width: "60px" }}
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
      <Menu
        id="basic-menu"
        MenuListProps={{
          "aria-labelledby": "long-text",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
        PaperProps={{
          elevation: 2,
          sx: {
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: "1px",
            maxWidth: "400px",
            height: "145px",
            borderRadius: 2,
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.2)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,.5)",
              border: "3px solid #F0F0F0",
              borderRadius: "10px",
              minHeight: 24,
              maxWidth: 5,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {currenciesList.map((item) => (
          <MenuItem
            key={item.ID}
            value={item.ID}
            onClick={() => handleSelect(item.ID)}
          >
            <ListItemText sx={{ width: "50px", maxWidth: "50px" }}>
              {item.CharCode}
            </ListItemText>
            <ListItemText
              sx={{
                color: "#71767A",
                "& .MuiTypography-root": {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            >
              {item.Name}
            </ListItemText>
            {item.ID === currency.ID && <DoneIcon />}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default React.memo(MenuCurrency);
