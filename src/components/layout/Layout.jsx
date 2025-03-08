import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="layout-container">
      <header className="bg-[#4b4b4b3d] my-4 mx-0 rounded-lg p-4">
        <Link href={"/"}>Crm | Project</Link>
        <Link className="transition-all duration-200 ease-linear hover:opacity-80 " href={"/add-customer"}>Add Customer</Link>
      </header>

      <main className="main">{children}</main>

      <footer className=" flex bg-[#4b4b4b3d]   my-4 mx-0 rounded-lg p-4 justify-center text-center">
        <span>Builded & Developed by ❤️</span>
      </footer>
    </section>
  );
};

export default Layout;
