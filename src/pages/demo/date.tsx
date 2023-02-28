import DatePicker from "../../components/DatePicker"
import { useState } from "react";



export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const onChange = (date: Date | null) => {
        if (!date) {
            return
        }
        setStartDate(date)
    }
    return (
        <div style={{ margin: "2em auto", width:"fit-content" }}>
            <DatePicker/>
        </div>
    );
};
