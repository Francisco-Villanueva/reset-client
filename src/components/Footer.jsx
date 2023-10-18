import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-black text-white  h-[10vh] grid place-items-center">
      <div className="flex gap-4 items-center">
        <span className="border rounded-full w-[2.2rem] h-[2.2rem]  grid place-items-center transition-all duration-200 hover:w-[3rem]">
          FV
        </span>
        <span>
          Develop by{" "}
          <a
            href="https://www.linkedin.com/in/francisco-villanueva-50708a226/"
            className="font-semibold"
          >
            Villanueva, Francisco
          </a>
        </span>
      </div>
    </footer>
  );
}
