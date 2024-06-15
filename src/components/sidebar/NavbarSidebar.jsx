import React, { useState } from "react";
function BarsMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-4"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
function AsideContainer({ children, sidebar }) {
  return (
    <div
      className={`${
        sidebar ? "translate-x-0 z-10" : "translate-x-full"
      } fixed top-0 left-0  h-[100vh] w-[100vw] transition-all duration-300 drop-shadow-xl bg-black/50 backdrop-blur-sm  `}
    >
      {children}
    </div>
  );
}
export function NavbarSidebar({ hidden = true, className = "" }) {
  const [sidebar, setSidebar] = useState(false);
  const toggleSideBar = () => setSidebar(!sidebar);

  return hidden ? (
    <div className={`flex gap-4  ${className}}`}>
      <a href="#form" className="uppercase">
        Agendá tu turno
      </a>
      <a href="#nosotros" className="uppercase">
        Nosotros
      </a>
      <a href="#" className="uppercase">
        Contacto
      </a>
    </div>
  ) : (
    <div className={` ${className}}`}>
      <button onClick={toggleSideBar}>
        <BarsMenu />
      </button>
      <AsideContainer sidebar={sidebar}>
        <aside
          className={`flex flex-col   border gap-6 absolute h-[100vh]  w-full top-0 right-0 bg-white py-10 px-4 text-lg transition-all duration-200 ${
            sidebar ? "translate-x-0 z-50" : "translate-x-full"
          }`}
        >
          <div className=" py-2 flex justify-between items-center border-b ">
            <h2 className="font-semibold ">MENU</h2>
            <button
              className="font-bold rounded-md bg-light-grey select-none text-2xl px-2"
              onClick={toggleSideBar}
            >
              x
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#form"
              className="uppercase rounded-lg p-1 transtion-all duration-200 hover:bg-light-grey px-4"
            >
              Agendá tu turno
            </a>
            <a
              href="#nosotros"
              className="uppercase rounded-lg p-1 transtion-all duration-200 hover:bg-light-grey px-4"
            >
              Nosotros
            </a>
            <a
              href="#footer"
              className="uppercase rounded-lg p-1 transtion-all duration-200 hover:bg-light-grey px-4"
            >
              Contacto
            </a>
          </div>

          <div className="absolute text-center right-5 bottom-0 uppercase text-black/50">
            Reset Salon ®️{" "}
          </div>
        </aside>
      </AsideContainer>
    </div>
  );
}
