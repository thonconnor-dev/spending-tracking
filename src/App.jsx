import {Box, Grid2, Stack} from "@mui/material";
import "./App.css";
import Nav from "./components/navigation/Nav";
import TransactionList from "./components/transaction/TransactionList";
import {Route, Routes} from "react-router-dom";
import IncomeList from "./components/transaction/IncomeList.jsx";
import {Cashflow} from "./components/transaction/Cashflow.jsx";
import Dashboard from "./components/home/Dashboard.jsx";

function App() {
    return (
        <Stack direction="column" sx={{flexGrow: 1, justifyContent: "space-between", alignItems: "center"}}>
            <Nav></Nav>
            <Box sx={{width:'80%'}}>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route
                    path="/expense"
                    element={
                        <TransactionList
                            header={"Expense"}
                            currentTime={"Feb 2025"}
                        />
                    }
                />
                <Route
                    path="/income"
                    element={
                        <IncomeList currentTime={"Feb 2025"}/>
                    }
                />
                <Route path="/cashflow"
                       element={<Cashflow/>}/>
            </Routes>
            </Box>
        </Stack>
    );
}

export default App;
