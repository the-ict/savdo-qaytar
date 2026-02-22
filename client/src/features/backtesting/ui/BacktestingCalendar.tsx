"use client";

import React, {
    useState
} from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BacktestingCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='absolute bottom-20 left-20 rounded-2xl z-50'>
            <Calendar onChange={onChange} value={value} className={"rounded-2xl p-5"} />
        </div>
    );
}