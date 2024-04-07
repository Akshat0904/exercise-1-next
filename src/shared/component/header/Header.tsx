import Image from "next/image";
import { NAVLINKS, SIDEBARLINKS } from "./header.constants";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50  font-medium ">
        <nav className="border-b bg-white border-at-light-500 h-15 xl:h-16 ">
          <div className="flex h-15 md:h-auto pl-0.5 pr-1.5 xl:pl-0 xl:pr-0 justify-center items-center relative xl:static xl:bottom-0 max-w-1200 m-auto">
            <button
              className="flex xl:hidden relative"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <Hamburger direction="right" color="#333333" size={25} />
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
                {NAVLINKS.map((navlink) => (
                  <li key={navlink}>
                    <a className="hover:bg-at-light-500 rounded-lg px-3 py-2 items-center gap-3">
                      {navlink}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex ml-3 justify-between items-center flex-grow xl:hidden">
              <a href="/_" className="relative">
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
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white ease-in-out duration-200 transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <main className="pt-15 pb-4">
          <ul className="pb-4 mb-4">
            <li className="flex items-baseline px-5 py-3">
              <a href="/_" className="font-medium text-2xl text-black">
                Buy
              </a>
            </li>
            <li className="flex items-baseline px-5 py-3">
              <a href="/_" className="font-medium text-2xl text-black">
                Rent
              </a>
            </li>
            <li className="flex items-baseline px-5 py-3">
              <a href="/_" className="font-medium text-2xl text-black">
                Sold
              </a>
            </li>
            <li className="flex items-baseline py-1 px-3 ">
              <a
                href="/_"
                className="font-medium text-base text-at-gray-500 flex items-center gap-3 py-2 relative  "
              >
                <Image
                  src="https://view.com.au/viewstatic/lancer/_next/static/media/nav-rocket.15d190c5.svg"
                  alt="Icon-1"
                  width={20}
                  height={20}
                />
                <span>New Developments</span>
              </a>
            </li>
            <li className="flex items-baseline py-1 px-3 ">
              <a
                href="/_"
                className="font-medium text-base text-at-gray-500 flex items-center gap-3 py-2 relative  "
              >
                <Image
                  src="https://view.com.au/viewstatic/lancer/_next/static/media/nav-scales.37599d36.svg"
                  alt="Icon-2"
                  width={20}
                  height={20}
                />
                <span>Price Estimate</span>
              </a>
            </li>
            <hr className="my-4 border" />
            {SIDEBARLINKS.map((sidebarlink) => (
              <li
                key={sidebarlink.title}
                className="flex items-baseline py-1 px-3 "
              >
                <a
                  href="/_"
                  className="font-medium text-base text-at-gray-500 flex items-center gap-3 py-2 relative  "
                >
                  <Image
                    src={sidebarlink.src}
                    alt="Icon-2"
                    width={20}
                    height={20}
                  />
                  <span>{sidebarlink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Header;
