import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  sidebar?: boolean;
  header?: boolean;
};
export function Layout({ children, sidebar = true,header= true}: Props) {
  return (
    <div>
      {
        header &&
      <Header />
      }
      <div>
        {
          sidebar &&
          <Sidebar />
        }
        {children}
      </div>
    </div>
  );
}

export default Layout;
