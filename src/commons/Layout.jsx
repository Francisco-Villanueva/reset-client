import React from "react";

export default function Layout({ className = "", children, id }) {
  return (
    <section className={`min-h-[100vh]   w-full ${className}`} id={id}>
      {children}
    </section>
  );
}
