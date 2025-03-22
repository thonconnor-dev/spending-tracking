import {Stack} from "@mui/material";
import PropTypes from "prop-types";
import "react";
import {CenterSide, ItemStyled, LeftSide, RightSide} from "../../styles/ListStyled.js";
import styled from "styled-components";

function TransactionItem({items, showNoOfItem, amountColor}) {
    let listHeight = showNoOfItem * 60;
    let sortedItems = items.sort((a, b) => new Date(b.date) - new Date(a.date));
    /* eslint-disable react/prop-types */
    let FocusStyled = styled.div`
        font-size: large;
        font-weight: bold;
        color: ${(props) => props.color || "black"};
    `;
    let DetailsStyled = styled.div`
        opacity: 0.5;
    `;
    /* eslint-enable react/prop-types */
    let rowNumber = 0;
    return (
        <Stack sx={{height: `${listHeight}px`, overflowY: 'auto'}}>
            {sortedItems.map((row) => {
                    rowNumber++;
                    return (
                        <ItemStyled rowNo={rowNumber} key={row.id}>
                            <LeftSide>
                                <img src="src/assets/react.svg" alt="icon"/>
                            </LeftSide>
                            <CenterSide>
                                <FocusStyled>{row.name}</FocusStyled>
                                <DetailsStyled>{row.category}</DetailsStyled>
                            </CenterSide>
                            <RightSide>
                                <FocusStyled color={amountColor}>${row.amount}</FocusStyled>
                                <DetailsStyled>{row.date}</DetailsStyled>
                            </RightSide>
                        </ItemStyled>
                    )
                }
            )}
        </Stack>
    );
}

TransactionItem.propTypes = {
    amountColor: PropTypes.string,
    showNoOfItem: PropTypes.number.isRequired,
    items: PropTypes.arrayOf({
        id: PropTypes.string,
        name: PropTypes.string,
        category: PropTypes.string,
        amount: PropTypes.string,
        date: PropTypes.string
    }).isRequired
};

export default TransactionItem;
