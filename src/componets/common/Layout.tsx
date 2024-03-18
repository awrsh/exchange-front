import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
  sidebar?: boolean;
  header?: boolean;
  className?:string
  containerClass?:string
};
export function Layout({ children, header = true,className,containerClass }: Props) {
  
  return (
    <div className={containerClass}>
      {header && <Header />}
      <div className={`pb-20 lg:pb-0 lg:mr-[60px] mt-4 lg:mt-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Layout ;
