import Image from "next/image";
import { NAVLINKS } from "./header.constants";
import { useState } from "react";

const Header = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 md:z-[51] font-medium ">
      <nav className="border-b bg-white border-at-light-500 h-15 xl:h-16 ">
        <div className="flex h-15 md:h-auto pl-0.5 pr-1.5 xl:pl-0 xl:pr-0 justify-center items-center relative xl:static xl:bottom-0 max-w-1200 m-auto">
          <button className="flex xl:hidden relative">
            {(!isNavOpen && (
              <div
                className="HAMBURGER-ICON relative h-12 w-10"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-6 absolute left-3 top-[15px] animate-pulse bg-at-gray-500"></span>
                <span className="block h-0.5 w-6 absolute left-3 top-[23px] animate-pulse bg-at-gray-500"></span>
                <span className="block h-0.5 w-6 absolute left-3 top-[31px] animate-pulse bg-at-gray-500"></span>
              </div>
            )) || (
              <div
                className="CROSS-ICON relative h-12 w-10"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-at-gray-500 absolute left-2 top-[10px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            )}
          </button>
          <div className="hidden h-16 xl:flex flex-grow items-center">
            <a href="/_" className="relative">
              <Image
                src="https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg"
                alt="view.com.au Logo"
                width={95}
                height={32}
              />
            </a>
            <ul className="w-full flex justify-center items-center gap-2 text-at-gray-500 font-medium  ">
              {NAVLINKS.map((navlink: string) => (
                <li key={navlink}>
                  <a className="hover:bg-at-light-500 rounded-lg px-3 py-2 items-center gap-3">
                    {navlink}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex ml-2.5 justify-between items-center flex-grow xl:hidden">
            <a href="/_" className="relative ">
              <Image
                src="https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg"
                alt="view.com.au Logo"
                width={76}
                height={26}
              />
            </a>
          </div>
          <div className="h-full flex justify-between items-center gap-2 xl:hidden">
            <button className=" font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 disabled:opacity-50 disabled:pointer-events-none rounded-lg text-sm py-1.5 px-2 flex items-center justify-center">
              Join / Sign In
            </button>
          </div>
          <div className="hidden xl:block">
            <button className=" font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 disabled:opacity-50 disabled:pointer-events-none rounded-lg py-2.5 px-3 flex items-center justify-center">
              Join / Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// import { useState } from "react"; // import state
// import Link from "next/link";

// export default function Header() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const showMenuNav =
//     "absolute w-full h-screen top-0 left-0 bg-white  z-10 flex flex-col justify-evenly items-center";

//   const hideNavMenu = "hidden";

//   return (
//     <div className="flex items-center justify-between border-b border-gray-400 py-8">
//       <nav>
//         <section className="MOBILE-MENU flex lg:hidden">
//           <div
//             className="HAMBURGER-ICON space-y-2"
//             onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
//           >
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           </div>
// <div className={isNavOpen ? showMenuNav : hideNavMenu}>
//   <div
//     className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
//     onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
//   >
//     <svg
//       className="h-8 w-8 text-gray-600"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="18" y1="6" x2="6" y2="18" />
//       <line x1="6" y1="6" x2="18" y2="18" />
//     </svg>
//   </div>
//   <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
//     <li className="border-b border-gray-400 my-8 uppercase">
//       <a href="/about">About</a>
//     </li>
//     <li className="border-b border-gray-400 my-8 uppercase">
//       <a href="/portfolio">Portfolio</a>
//     </li>
//     <li className="border-b border-gray-400 my-8 uppercase">
//       <a href="/contact">Contact</a>
//     </li>
//   </ul>
// </div>
//         </section>

//         <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/portfolio">Portfolio</a>
//           </li>
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       {/* <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style> */}
//     </div>
//   );
// }
