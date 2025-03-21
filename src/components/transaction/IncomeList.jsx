import 'react';
import {Box, Button, FormControl, Grow, OutlinedInput} from "@mui/material";
import {Search} from "@mui/icons-material";
import ExpenseDialog from "./ExpenseDialog.jsx";
import TransactionItem from "./TransactionItem.jsx";
import {useContext, useState} from "react";
import {TopContainer} from "../../styles/ListStyled.js";
import {UUID} from 'uuidjs';
import {IncomeContext} from "../../context/ContextProvider.js";

export default function IncomeList() {
    const [openDialog, setOpenDialog] = useState(false);
    const {incomeList, setIncomeList} = useContext(IncomeContext);

    const OnAddNewIncome = (newIncome) => {
        setIncomeList([...incomeList, {
            id: UUID.generate(),
            name: newIncome.name,
            description: newIncome.description,
            amount: newIncome.amount,
            date: newIncome.date
        }]);
    }

    return (
        <Grow in={true}>
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "20px",
                    boxShadow: "0px 0px 10px 5px #b0b4b4",
                    borderRadius: "5px",
                    width: '60%'
                }}
                gap={1}
            >
                <FormControl sx={{width: "60%"}}>
                    <OutlinedInput
                        placeholder="Search Income"
                        endAdornment={<Search/>} ß
                    />
                </FormControl>
                <TopContainer>
                    <h2>Recent Income</h2>
                    <ExpenseDialog
                        openDialog={openDialog}
                        setOpenDialogCallback={setOpenDialog}
                        onSubmit={OnAddNewIncome}
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
                <TransactionItem items={incomeList} showNoOfItem={5} amountColor={'green'}/>
            </Box>
        </Grow>
    );
};

IncomeList.propTypes = {}
