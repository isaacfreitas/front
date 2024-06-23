import {Box, Typography} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './calendar.css';

function Calendar() {
  return (
  
    <Box className='box'>
        <Typography variant='h5'>Agendas Disponíveis</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Escolha a data"/>
        </LocalizationProvider>
    </Box>
  
  );
}

export default Calendar;
