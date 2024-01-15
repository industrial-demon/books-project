import { Suspense} from "react";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router";
import { ScrollToTop } from "../../components/scroll-to-top";

import "./root.page.css";

export const Root = () => {
  return (
    <>
      <div className="root-page">
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <ScrollToTop />
    </>
  );
};

export const RootPage = observer(Root);
