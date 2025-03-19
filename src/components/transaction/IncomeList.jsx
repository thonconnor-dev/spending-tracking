import 'react';
import {Box, Button, FormControl, Grow, OutlinedInput} from "@mui/material";
import {Search} from "@mui/icons-material";
import ExpenseDialog from "./ExpenseDialog.jsx";
import TransactionItem from "./TransactionItem.jsx";
import {useState} from "react";
import {TopContainer} from "../../styles/ListStyled.js";
import PropTypes from "prop-types";

export default function IncomeList({currentTime}) {
    const [openDialog, setOpenDialog] = useState(false);
    const rows = [
        {
            id: "1",
            name: "Costco Gas",
            amount: 90,
            category: "Gasoline",
            date: "01/05/2002",
        },
        {
            id: "2",
            name: "Costco Gas",
            amount: 90,
            category: "Gasoline",
            date: "01/05/2002",
        }
    ];

    return (
        <Grow in={true}>
            <Box
                sx={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    marginLeft: "30px",
                    marginRight: "20%",
                    padding: "20px",
                    boxShadow: "0px 0px 10px 5px #b0b4b4",
                    borderRadius: "5px"
                }}
                gap={1}
            >
                <h1>Income</h1>
                <FormControl sx={{width: "60%"}}>
                    <OutlinedInput
                        placeholder="Search Income"
                        endAdornment={<Search/>} ß
                    />
                </FormControl>
                <TopContainer>
                    <h2>{currentTime}</h2>
                    <ExpenseDialog
                        openDialog={openDialog}
                        setOpenDialogCallback={setOpenDialog}
                    />
                    <Button
                        variant="contained"
                        size="md"
                        onClick={() => {
                            setOpenDialog(true);
                        }}
                    >
                        New Income
                    </Button>
                </TopContainer>
                <TransactionItem items={rows}/>
            </Box>
        </Grow>
    );
};

IncomeList.propTypes = {
    currentTime : PropTypes.string
}
