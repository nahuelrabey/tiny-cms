import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./selector.module.css";

type params = { elements: JSX.Element[] };
export default function Selector({ elements }: params) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        HOLA
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal className={styles.portal}>
        <DropdownMenu.Content className={styles.content}>
          {elements.map((e, i) => (
            <DropdownMenu.Item key={i}>{e}</DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
