import React from "react";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* Footer or other components */}
    </div>
  );
}
