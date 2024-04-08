import Image from "next/image";
import { SIDEBAR_LINKS } from "./sidebar.constants";
import { ISidebarLink } from "./sidebar.interface";

const Sidebar = ({ isNavOpen }: { isNavOpen: boolean }): JSX.Element => {
  const firstPartOfLinks = SIDEBAR_LINKS.slice(3, 5);
  const secondPartOfLinks = SIDEBAR_LINKS.slice(5);

  const renderMainLinks = () => {
    let mainLinks = SIDEBAR_LINKS.slice(0, 3);
    return (
      <>
        {mainLinks.map((mainLink) => (
          <li key={mainLink.title} className="flex items-baseline px-5 py-3">
            <a href="/_" className="font-medium text-2xl text-black">
              {mainLink.title}
            </a>
          </li>
        ))}
      </>
    );
  };

  const renderSidebarLinks = (links: ISidebarLink[]) => {
    return (
      <>
        {links.map((sidebarlink) => (
          <li
            key={sidebarlink.title}
            className="flex items-baseline py-1 px-3 "
          >
            <a
              href="/_"
              className="font-medium text-base text-at-gray-500 flex items-center gap-3 py-2 relative  "
            >
              <Image
                src={sidebarlink.src!}
                alt="Icon-2"
                width={20}
                height={20}
              />
              <span>{sidebarlink.title}</span>
            </a>
          </li>
        ))}
      </>
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white ease-in-out duration-200 transform ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <ul className="pt-15 pb-8 mb-4">
        {renderMainLinks()}
        {renderSidebarLinks(firstPartOfLinks)}
        <hr className="my-4 border" />
        {renderSidebarLinks(secondPartOfLinks)}
      </ul>
    </div>
  );
};

export default Sidebar;
