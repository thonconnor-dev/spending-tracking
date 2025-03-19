import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import "react";
import {CenterSide, DivLine, ItemStyled, LeftSide, RightSide} from "../../styles/ListStyled.js";

function TransactionItem({items}) {


  return (
    <Stack>
      {items.map((row) => (
        <>
          <ItemStyled key={row.name}>
            <LeftSide>
              <img src="src/assets/react.svg"  alt="icon"/>
            </LeftSide>
            <CenterSide>
              <div>{row.name}</div>
              <div>{row.category}</div>
            </CenterSide>
            <RightSide>
              <div>{row.amount}</div>
              <div>{row.date}</div>
            </RightSide>
          </ItemStyled>
          <DivLine key={row.name + "line"}></DivLine>
        </>
      ))}
    </Stack>
  );
}

TransactionItem.propTypes = {
    items : PropTypes.arrayOf({
        id: PropTypes.string,
        name : PropTypes.string,
        category: PropTypes.string,
        amount: PropTypes.string,
        date: PropTypes.string
    }).isRequired
};

export default TransactionItem;
