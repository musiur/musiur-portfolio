import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const iconDimention = "w-7 h-7";

const BarMenu = <FontAwesomeIcon icon={faBars} className={iconDimention} />;
const TimesMenu = <FontAwesomeIcon icon={faTimes} className={iconDimention} />;

const navlinks = ["Projects", "Blog", "About", "Contact"];
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav>
        <div>
          <div>
            <span>musiur</span>
          </div>
          <div>
            <ULlist />
          </div>
          <div className="btn__part">
            <button className="btn__primary">Get Resume</button>
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
      {navlinks.map((link, i) => {
        return (
          <li key={i}>
            <Link href="/">{link}</Link>
          </li>
        );
      })}
    </ul>
  );
};
