import {Box, Stack} from "@mui/material";
import "./App.css";
import Nav from "./components/navigation/Nav";
import TransactionList from "./components/transaction/TransactionList";
import {Route, Routes} from "react-router-dom";
import IncomeList from "./components/transaction/IncomeList.jsx";
import {Cashflow} from "./components/transaction/Cashflow.jsx";
import Dashboard from "./components/home/Dashboard.jsx";
import { useEffect, useState} from "react";
import {IncomeContext} from "./context/ContextProvider.js";

function App() {

    const [incomeList, setIncomeList] = useState([]);

    useEffect(() => {
        fetch('src/data/incomes.json')
            .then(res => res.json())
            .then(data => setIncomeList(data))
    },[]);

    return (
        <IncomeContext.Provider value={{incomeList, setIncomeList}}>
            <Stack direction="column"
                   sx={{flexGrow: 1, justifyContent: "space-between", alignItems: "center", gap: '10px'}}>
                <Nav></Nav>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
        </IncomeContext.Provider>
    );
}

export default App;
