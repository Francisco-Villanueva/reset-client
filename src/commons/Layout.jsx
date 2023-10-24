import React from "react";

export default function Layout({ className = "", children }) {
  return (
    <section className={`min-h-[100vh]  w-full ${className}`}>
      {children}
    </section>
  );
}
