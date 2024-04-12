import React, { ReactNode } from "react";
import { Navbar } from "../Navbar";
import { NotificationBar } from "../NotificationBar";
import { Footer } from "../Footer";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NotificationBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
