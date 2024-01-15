import { observer } from "mobx-react-lite";
import { SortIcon } from "../../icons";
import { useRootStore } from "../../hooks";

import "./button-sort.component.css";

export function ButtonSortFn() {
  const store = useRootStore();
  return (
    <button onClick={store.sorter.changeSortDirection} className="button-sort">
      <SortIcon/>
    </button>
  );
}

export const ButtonSort = observer(ButtonSortFn);
