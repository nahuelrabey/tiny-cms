import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./selector.module.css";

type params = { elements: string[], children:string };
export default function Selector({ elements, children }: params) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        {children} 
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal className={styles.portal}>
        <DropdownMenu.Content className={styles.content}>
          {elements.map((e, i) => (
            <DropdownMenu.Item key={i} className={styles.item}>{e}</DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
