import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <>
      <nav>
        <div>
          <Link href="/">
            <span>musiur</span>
          </Link>
          <div>
            <ULlist />
          </div>
          <div className="btn__part">
            <a target="_blank" href={ResumeLink} rel="noopener noreferrer">
              <button className="btn__primary">Get Resume</button>
            </a>
            <button onClick={handleMenu} className="menu">
              {openMenu ? TimesMenu : BarMenu}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile navbar  */}
      <div
        className={`z-10 bg-gray-800 text-white ${
          openMenu
            ? "-translate-y-0 opacity-100 h-auto"
            : "-translate-y-full opacity-0 h-0"
        } ease-in-out duration-300 mobileMenu`}
      >
        <ULlist />
      </div>
    </>
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
