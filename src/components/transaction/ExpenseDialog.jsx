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
import {useState} from "react";
import dayjs from "dayjs";

function ExpenseDialog({openDialog, setOpenDialogCallback, onSubmit}) {
    const [formDescription] = useState({});
    const onFormChanged = (e) => {
        formDescription[e.target.name] = e.target.value;
    }
    const onDateChange = (e) => {
        formDescription['date'] = dayjs(e).format('MM/DD/YYYY');
    }
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
                <TextField id="outlined-basic" label="name" name="name" variant="outlined" onChange={onFormChanged}/>
                <TextField id="outlined-basic" label="amount" name="amount" variant="outlined" onChange={onFormChanged}/>
                <FormControl fullWidth>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        name="category"
                        label="category"
                        variant="outlined" onChange={onFormChanged}>
                        <MenuItem value={'Gasoline'}>Gasoline</MenuItem>
                        <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
                        <MenuItem value={'Grocery'}>Grocery</MenuItem>
                        <MenuItem value={'Food'}>Food</MenuItem>
                        <MenuItem value={'Trip'}>Trip</MenuItem>
                        <MenuItem value={'Shopping'}>Shopping</MenuItem>
                        <MenuItem value={'Salary'}>Salary</MenuItem>
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="date" name="date" onChange={onDateChange}/>
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
                    <Button size="md" variant="contained" onClick={() => {
                        onSubmit(formDescription)
                        setOpenDialogCallback(false);
                    }
                    }>
                        Submit
                    </Button>
                </Box>
            </Stack>
        </Modal>
    );
}

ExpenseDialog.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    openDialog: PropTypes.bool.isRequired,
    setOpenDialogCallback: PropTypes.func.isRequired,
};

export default ExpenseDialog;
