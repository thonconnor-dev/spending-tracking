import 'react';
import {Box, Grow} from "@mui/material";
import {BarChart} from "@mui/x-charts";

export const Cashflow = () => {
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
                <h1>Cashflow</h1>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['January', 'February', 'March'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
                    width={500}
                    height={300}
                />
            </Box>
        </Grow>
    );
};