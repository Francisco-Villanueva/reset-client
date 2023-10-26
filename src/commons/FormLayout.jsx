import React from "react";

export default function FormLayout({ className = "", children, title = "" }) {
  return (
    <section
      className={`h-full max-h-full  overflow-y-auto p-4 w-full relative ${
        title !== "" && " pt-[5rem] "
      }${className}`}
    >
      {title !== "" && (
        <h2 className="absolute top-3 left-3 font-medium text-x bg-selected text-white p-2 rounded-md">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
