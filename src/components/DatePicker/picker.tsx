import { useState, MouseEvent, ChangeEvent } from "react";
import { useDatePicker } from "@rehookify/datepicker";
import styles from "./picker.module.css";
/**
 * Should return 7*5 items, the dates of the month
 */

type params = { onClick: (d: Date) => void | Promise<void> };

export default function Picker({ onClick }: params) {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const {
    data: { weekDays, calendars, months },
    propGetters: { dayButton },
    actions: { setMonth, setYear },
  } = useDatePicker({
    selectedDates,
    onDatesChange,
    calendar: {},
    dates: {
      mode: "multiple",
    },
  });

  // const {} = useMonthsActions()
  console.log(months);

  // calendars[0] is always present, this is an initial calendar
  const { year, month, days } = calendars[0];

  const onDayClick = (evt: MouseEvent<HTMLElement>, date: Date) => {
    if (!evt) {
      return;
    }
    // In case you need any action with evt
    evt.stopPropagation();

    // In case you need any additional action with date
    onClick(date);
  };

  const monthsMap = new Map<string, Date>();
  for (const dpMont of months) {
    monthsMap.set(dpMont.month, dpMont.$date);
  }

  const onMonthSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    const dateMonth = monthsMap.get(month);
    if (!dateMonth) {
      return;
    }
    setMonth(dateMonth);
  };

  const onYearSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    const _year = new Date(Number(year), 0, 1);
    console.log(_year);
    setYear(_year);
  };

  console.log(days);

  return (
    <section className={styles.Calendar}>
      <header className={styles.header}>
        <select
          value={Number(year)}
          onChange={onYearSelect}
          className={styles.selector}
        >
          {[...Array(100).keys()].map((value) => (
            <option key={value} value={1977 + value}>
              {1976 + value}
            </option>
          ))}
        </select>
        <select
          onChange={onMonthSelect}
          value={month}
          className={styles.selector}
        >
          {months.map((dpMonth, index) => {
            return (
              <option key={index} value={dpMonth.month}>
                {dpMonth.month}
              </option>
            );
          })}
        </select>
      </header>
      <ul className={styles.days}>
        {weekDays.map((day) => (
          <li key={`${month}-${day}`} className={styles.dayName}>
            {day}
          </li>
        ))}
        {days.map((dpDay) => (
          <li key={`${dpDay.$date.getMonth()}-${dpDay.day}`}>
            <button
              {...dayButton(dpDay, { onClick: onDayClick })}
              className={
                dpDay.inCurrentMonth ? styles.current : styles.notcurrent
              }
            >
              {dpDay.day}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
