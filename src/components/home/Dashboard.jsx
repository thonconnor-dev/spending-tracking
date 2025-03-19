import 'react';
import {Box, Grow} from "@mui/material";
import {BarChart, LineChart, PieChart} from "@mui/x-charts";

export default function Dashboard() {
    return (
        <Grow in={true}>
            <Box>
                <h1>Welcome Sethon</h1>
                <Box
                    sx={{
                        backgroundColor: "white",
                        marginTop: "10px",
                        marginRight: "20%",
                        padding: "20px",
                        boxShadow: "0px 0px 10px 5px #b0b4b4",
                        borderRadius: "5px"
                    }}
                    gap={1}
                >
                    <h1>Account Balance</h1>
                    <LineChart
                        xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                        series={[
                            {
                                curve: "linear",
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={500}
                        height={300}
                    />
                </Box>
                <Box sx={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    marginRight: "20%",
                    padding: "20px",
                    boxShadow: "0px 0px 10px 5px #b0b4b4",
                    borderRadius: "5px"
                }}>
                    <h1>Expense</h1>
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
                </Box>
                <Box
                    sx={{
                        backgroundColor: "white",
                        marginTop: "10px",
                        marginRight: "20%",
                        padding: "20px",
                        boxShadow: "0px 0px 10px 5px #b0b4b4",
                        borderRadius: "5px"
                    }}
                    gap={1}
                >
                    <h1>Cashflow</h1>
                    <BarChart
                        xAxis={[{scaleType: 'band', data: ['January', 'February', 'March']}]}
                        series={[{data: [4, 3, 5]}, {data: [1, 6, 3]}]}
                        width={500}
                        height={300}
                    />
                </Box>
            </Box>
        </Grow>
    );
};