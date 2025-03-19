import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import "react";
import PropTypes from "prop-types";

function ExpenseDialog({openDialog, setOpenDialogCallback}) {
    return (
        <Modal open={openDialog}>
            <Stack
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    borderRadius: "10px",
                    p: 4,
                }}
                spacing={2}
                direction="column"
            >
                <Typography variant="h4" gutterBottom>
                    New Expense
                </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined"/>
                <TextField id="outlined-basic" label="Amount" variant="outlined"/>
                <FormControl fullWidth>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        label="Age"
                        variant="outlined">
                        <MenuItem value={10}>Gasoline</MenuItem>
                        <MenuItem value={20}>Resturant</MenuItem>
                        <MenuItem value={30}>Grocery</MenuItem>
                        <MenuItem value={10}>Food</MenuItem>
                        <MenuItem value={20}>Trip</MenuItem>
                        <MenuItem value={30}>Shopping</MenuItem>
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date"/>
                </LocalizationProvider>
                <Box
                    sx={{
                        textAlign: "right",
                        display: "flex",
                        gap: 2,
                        alignSelf: "flex-end",
                    }}
                >
                    <Button
                        size="md"
                        variant="contained"
                        sx={{backgroundColor: "#cc2828"}}
                        onClick={() => {
                            setOpenDialogCallback(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button size="md" variant="contained">
                        Submit
                    </Button>
                </Box>
            </Stack>
        </Modal>
    );
}

ExpenseDialog.propTypes = {
    openDialog: PropTypes.bool.isRequired,
    setOpenDialogCallback: PropTypes.func.isRequired,
};

export default ExpenseDialog;
