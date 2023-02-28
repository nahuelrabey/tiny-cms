import Picker from "./picker";
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';
import style from "./calendar.module.css"
import { useState } from "react";
/**
 * Should return 7*5 items, the dates of the month
 */

export default function DatePicker() {
  const [date, setDate] = useState("select date")

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={style.Trigger}>
          {date}
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content className={style.Content}>
          <Picker onClick={(d)=>setDate(d.toLocaleDateString())}/>
          <Popover.Close className={style.Close}>
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className={style.Arrow}/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
