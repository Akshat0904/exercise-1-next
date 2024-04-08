import Image from "next/image";
import { SIDEBAR_LINKS } from "./sidebar.constants";

const Sidebar = ({ isNavOpen }: { isNavOpen: boolean }): JSX.Element => {
  return (
    <>
      {" "}
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
            {SIDEBAR_LINKS.map((sidebarlink) => (
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

export default Sidebar;
