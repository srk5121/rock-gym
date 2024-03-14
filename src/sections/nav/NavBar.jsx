import { useState } from "react";
import { IoCloseSharp, GiHamburgerMenu } from "./index";

const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState("hidden");
  const handleDisplayMenu = () => {
    if (displayMenu === "") setDisplayMenu("hidden");
    else setDisplayMenu("");
  };
  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-black md:bg-black">
      <section className="relative flex items-center justify-between">
        <h1 className="realative z-50 p-5 font-primary text-4xl text-primary md:px-4 md:py-3 md:text-5xl">
          <a href="#hero" className="stroke">
            ROCK
          </a>
        </h1>

        <div className="realative z-40">
          <button
            className="p-4  text-4xl text-primary md:hidden"
            onClick={handleDisplayMenu}
          >
            {displayMenu === "" ? (
              <IoCloseSharp className="text-5xl " />
            ) : (
              <div className="stroke mx-2 rotate-90 font-semibold text-primary">
                <span>l</span>
                <span>l</span>
                <span>l</span>
              </div>
            )}
          </button>
          <nav className="mr-6 hidden md:block">
            <ul className="flex flex-row gap-4 text-xs font-semibold tracking-wider text-primary lg:gap-6">
              <li>
                <a href="#hero" className="underline-offset-2 hover:underline">
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#trainer"
                  className="underline-offset-2 hover:underline"
                >
                  TRAINER
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  className="underline-offset-2 hover:underline"
                >
                  EQUIPMENT
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="underline-offset-2 hover:underline"
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="underline-offset-2 hover:underline"
                >
                  REVIEWS
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="underline-offset-2 hover:underline"
                >
                  LOCATION
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="underline-offset-2 hover:underline"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <section
          className={`fixed inset-[-10rem] *:w-max ${displayMenu} z-30 grid place-items-center bg-black text-primary`}
          onClick={handleDisplayMenu}
        >
          <ul className="flex flex-col items-center text-xl font-medium tracking-[0.3rem]">
            <li>
              <a className="inline-block p-4" href="#hero">
                HOME
              </a>
            </li>
            <li>
              <a className="inline-block p-4" href="#trainer">
                TRAINER
              </a>
            </li>
            <li>
              <a className="inline-block p-4" href="#equipment">
                EQUIPMENT
              </a>
            </li>
            <li>
              <a className="inline-block p-4" href="#gallery">
                GALLERY
              </a>
            </li>
            <li>
              <a className="inline-block p-4" href="#reviews">
                REVIEWS
              </a>
            </li>
            <li>
              <a className="inline-block p-4" href="#location">
                LOCATION
              </a>
            </li>
            <li>
              <a className="inline-block p-4" href="#contact">
                CONTACT US
              </a>
            </li>
          </ul>
        </section>
      </section>
    </header>
  );
};

export default NavBar;
