import {Box, Button, FormControl, Grow, OutlinedInput} from "@mui/material";
import "react";
import {useState} from "react";
import ExpenseDialog from "./ExpenseDialog";
import TransactionItem from "./TransactionItem";
import {Search} from "@mui/icons-material";
import PropTypes from "prop-types";
import {TopContainer} from "../../styles/ListStyled.js";
import {PieChart} from "@mui/x-charts";

function TransactionList({currentTime}) {
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
        },
        {
            id: "3",
            name: "Costco Gas",
            amount: 90,
            category: "Gasoline",
            date: "01/05/2002",
        },
        {
            id: "4",
            name: "Costco Gas",
            amount: 90,
            category: "Gasoline",
            date: "01/05/2002",
        },
    ];
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <Grow in={true}>
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "20px",
                    boxShadow: "0px 0px 10px 5px #b0b4b4",
                    borderRadius: "5px",
                    width: "60%",
                }}
                gap={1}
            >
                <h2>{currentTime}</h2>
                <PieChart
                    series={[
                        {
                            data: [
                                {id: 0, value: 10, label: 'Gas'},
                                {id: 1, value: 15, label: 'Grocery'},
                                {id: 2, value: 20, label: 'Utilities'},
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />
                <TopContainer>
                    <FormControl sx={{width: "60%"}}>
                        <OutlinedInput
                            placeholder="Search Transaction"
                            endAdornment={<Search/>}
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        size="md"
                        onClick={() => {
                            setOpenDialog(true);
                        }}
                    >
                        New Expense
                    </Button>
                </TopContainer>
                <TransactionItem items={rows} showNoOfItem={5}/>
                <ExpenseDialog
                    openDialog={openDialog}
                    setOpenDialogCallback={setOpenDialog}
                />
            </Box>
        </Grow>
    );
}

TransactionList.propTypes = {
    header: PropTypes.string,
    currentTime: PropTypes.string
}

export default TransactionList;
