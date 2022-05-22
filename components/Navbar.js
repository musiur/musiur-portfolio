import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ResumeLink =
  "https://docs.google.com/document/d/1Iaqhcmd-wYYDcdedQgeOOG5DJAtSmfX6ZqDjskccsk0/edit?usp=sharing";
const iconDimention = "w-7 h-7";

const BarMenu = <FontAwesomeIcon icon={faBars} className={iconDimention} />;
const TimesMenu = <FontAwesomeIcon icon={faTimes} className={iconDimention} />;

const navlinks = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="fixed w-full top-0">
      <nav>
        <div>
          <Link href="/">
            <p className="brand">
              <Image
                src="/static/logo/musiur1.svg"
                alt=""
                width={50}
                height={50}
              />
              <span>musiur</span>
            </p>
          </Link>
          <div>
            <ULlist />
          </div>
          <div className="btn__part">
            <a target="_blank" href={ResumeLink} rel="noopener noreferrer">
              <button className="btn__primary">Get Resume</button>
            </a>
            <div onClick={handleMenu} className="menu">
              {openMenu ? TimesMenu : BarMenu}
            </div>
          </div>
        </div>
      </nav>

      {/* mobile navbar  */}
      <div
        className={`z-10 bg-bg-dark text-white ${
          openMenu
            ? "-translate-y-0 -translate-x-0 opacity-100 h-auto"
            : "-translate-y-full -translate-x-full opacity-1 h-0"
        } ease-in-out duration-300 mobileMenu`}
      >
        <ULlist />
      </div>
    </div>
  );
};

export default Navbar;

const ULlist = () => {
  return (
    <ul>
      {navlinks.map((linkData, i) => {
        const { link, name } = linkData;
        return (
          <li key={i}>
            <Link href={link}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
