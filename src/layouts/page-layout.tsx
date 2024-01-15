import { ReactNode } from "react";
import "./page-layout.css";

export const PageLayout = ({
  headerContent,
  children,
}: {
  headerContent: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="page-layout">
      <div className="page-header">{headerContent}</div>

      <div className="page-content">{children}</div>
    </div>
  );
};
