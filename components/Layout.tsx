import { ReactNode } from "react";
import NavBar from "./Navbar";
import Seo from "./Seo";

interface LayoutPros {
  children: ReactNode;
}

export default function Layout({ children }: LayoutPros) {
  return (
    <>
      <NavBar />
      <Seo />
      <div>{children}</div>
    </>
  );
}
