import React from "react";

export default function FormLayout({ className = "", children }) {
  return (
    <section
      className={`h-full max-h-full  overflow-y-auto p-4 w-full relative  ${className}`}
    >
      {children}
    </section>
  );
}
