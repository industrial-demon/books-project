import { ReactNode, createContext, useEffect, useState } from "react";
import { RootStore } from "../stores/root-store";
import { PaginatorControl } from "../stores/paginator-control";
import { SorterConrol } from "../stores/sorter-control";

export const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(
    () => new RootStore(new PaginatorControl(), new SorterConrol())
  );

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
