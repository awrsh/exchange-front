import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};
export function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
