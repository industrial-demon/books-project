import { RootStoreProvider } from "../providers/root-store.provider";
import { Routing } from "../routes";
import "./globals.css";

function App() {
  return (
    <RootStoreProvider>
      <Routing />
    </RootStoreProvider>
  );
}

export default App;
