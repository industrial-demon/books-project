import { useContext } from "react";
import { RootStoreContext } from "../providers/root-store.provider";

export const useRootStore = () => {
  const ctx = useContext(RootStoreContext);
  if (ctx === null) {
    throw new Error("Must be in context RootStoreProvider");
  }
  return ctx;
};


