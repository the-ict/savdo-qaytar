"use client";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BacktestingCalendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <div className='absolute bottom-20 left-20 rounded-2xl z-50 bg-[#0d1117] border border-white/10 p-2'>
                    <DatePicker label="Basic date picker" />
                </div>
            </DemoContainer>
        </LocalizationProvider>
    );
}
