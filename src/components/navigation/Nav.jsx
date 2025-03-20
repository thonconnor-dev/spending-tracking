import "react";
import {  Stack } from "@mui/material";
import {
  AttachMoney,
  CurrencyExchange, Home,
  Payments,
} from "@mui/icons-material";
import NavItem from "./NavItem";
import { gridStyle } from "../../styles/NavStyled";

export default function Nav() {
  const navItems = [
    {
      text: "Dashboard",
      icon: <Home fontSize="large" />,
      route: "/",
    },
    {
      text: "Income",
      icon: <AttachMoney fontSize="large" />,
      route: "/income",
    },
    {
      text: "Expense",
      icon: <Payments fontSize="large" />,
      route: "expense",
    },
    {
      text: "Cashflow",
      icon: <CurrencyExchange fontSize="large" />,
      route: "cashflow",
    },
  ];
  return (
      <Stack
        direction={"row"}
        gap={3}
        component={"div"}
        sx={gridStyle}
        display={"flex"}
      >
        {navItems.map((item) => (
          <NavItem key={item.text} text={item.text} route={item.route}>
            {item.icon}
          </NavItem>
        ))}
      </Stack>
  );
}
