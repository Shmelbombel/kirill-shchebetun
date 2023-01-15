import React, { ReactNode } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
