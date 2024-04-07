import Image from "next/image";
import {
  SOCIALMEDIALINKS,
  CONTACTLINKS,
  MOBILELINKS,
  FIRSTDESKTOPLINKS,
  SECONDDESKOTOPLINKS,
  THIRDDESKTOPLINKS,
  FOURTHDESKTOPLINKS,
} from "./footer.constants";

const Footer = (): JSX.Element => {
  return (
    <footer className="px-5 lg:max-w-1200 lg:mx-auto lg:px-0">
      <div className="py-6 border-b border-at-light-500 flex justify-center items-center lg:justify-between">
        <div className="flex gap-8 lg:gap-6">
          {SOCIALMEDIALINKS.map((socialmedialink, index) => (
            <a
              key={index}
              className="text-default hover:text-at-primary cursor-pointer text-at-gray-500"
              href="/_"
            >
              <Image
                src={socialmedialink.src}
                alt={socialmedialink.alt}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-end gap-6">
            {CONTACTLINKS.map((contactlink) => (
              <a
                key={contactlink}
                className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
                href="/_"
                aria-label={contactlink}
              >
                {contactlink}
              </a>
            ))}
          </ul>
        </div>
      </div>
      <ul className="border-b border-at-light-500 lg:hidden grid grid-cols-2 py-6 gap-2 place-items-center">
        {MOBILELINKS.map((mobilelink) => (
          <li key={mobilelink} className="mb-2">
            <a
              href="/_"
              className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
              aria-label={mobilelink}
            >
              {mobilelink}
            </a>
          </li>
        ))}
      </ul>
      <div className="py-6 border-b border-at-light-500 hidden lg:flex justify-center">
        <div className="text-at-gray-700 pr-5 text-base grid grid-cols-4 w-full text-left">
          <ul className="space-y-4">
            {FIRSTDESKTOPLINKS.map((firstSectionLink) => (
              <li key={firstSectionLink}>
                {" "}
                <a
                  href="/_"
                  className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
                  aria-label={firstSectionLink}
                >
                  {firstSectionLink}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {SECONDDESKOTOPLINKS.map((secondSectionLink) => (
              <li key={secondSectionLink}>
                {" "}
                <a
                  href="/_"
                  className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
                  aria-label={secondSectionLink}
                >
                  {secondSectionLink}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {THIRDDESKTOPLINKS.map((thirdSectionLink) => (
              <li key={thirdSectionLink}>
                {" "}
                <a
                  href="/_"
                  className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
                  aria-label={thirdSectionLink}
                >
                  {thirdSectionLink}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {FOURTHDESKTOPLINKS.map((fourthSectionLink) => (
              <li key={fourthSectionLink}>
                {" "}
                <a
                  href="/_"
                  className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
                  aria-label={fourthSectionLink}
                >
                  {fourthSectionLink}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
