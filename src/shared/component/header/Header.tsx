import Image from "next/image";
import { NAVLINKS } from "./header.constants";

const Header = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 md:z-[51] font-medium ">
      <nav className="border-b bg-white border-at-light-500 h-15 xl:h-16 ">
        <div className="flex h-15 md:h-auto pl-0 pr-0 justify-center items-center relative xl:static xl:bottom-0 max-w-1200 m-auto">
          <div className="hidden h-16 xl:flex flex-grow items-center">
            <a href="/_" className="relative top-1">
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
