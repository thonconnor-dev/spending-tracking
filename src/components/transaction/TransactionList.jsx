import {Box, Button, FormControl, Grow, OutlinedInput} from "@mui/material";
import "react";
import {useState} from "react";
import ExpenseDialog from "./ExpenseDialog";
import TransactionItem from "./TransactionItem";
import {Search} from "@mui/icons-material";
import PropTypes from "prop-types";
import {TopContainer} from "../../styles/ListStyled.js";
import {PieChart} from "@mui/x-charts";

function TransactionList({ currentTime}) {
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


    // useEffect(() => {
    //   grow.current = true;
    // },[location])
    return (
        <Grow in={true}>
            <Box
                sx={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    marginLeft: "40px",
                    marginRight: "20%",
                    padding: "20px",
                    boxShadow: "0px 0px 10px 5px #b0b4b4",
                    borderRadius: "5px"
                }}
                gap={1}
            >
                <h1>Transaction</h1>
                <FormControl sx={{width: "60%"}}>
                    <OutlinedInput
                        placeholder="Search Transaction"
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
                        New Expense
                    </Button>
                </TopContainer>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'Gas' },
                                { id: 1, value: 15, label: 'Grocery' },
                                { id: 2, value: 20, label: 'Utilities' },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />
                <TransactionItem items={rows}/>
            </Box>
        </Grow>
    );
}

TransactionList.propTypes = {
    header: PropTypes.string,
    currentTime: PropTypes.string
}

export default TransactionList;
