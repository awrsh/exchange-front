import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
  sidebar?: boolean;
  header?: boolean;
};
export function Layout({ children, header = true }: Props) {
  return (
    <div >
      {header && <Header />}
      <div className="lg:mr-[60px]  mt-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;
