import Link from "next/link";
import React from "react";
import { animated, config, useSpring } from "react-spring";
import useStore from "../store";
import MobileMenu from "./MobileMenu";

export default function ContainerGallery({ children, sidebar }) {
  const toggleMenu = useStore((state) => state.toggleMenu);
  const menu = useStore((state) => state.menu);
  const animation = useSpring({
    opacity: menu ? 0 : 1,
    config: config.molasses,
  });

  return (
    <div className={`${!menu ? "bg-white opacity-100" : "bg-gray-50"}`}>
      <header className={`sticky top-0 ${sidebar ? "z-0" : "z-10"}`}>
        <div
          className={`flex items-center justify-between px-4 px-6 py-7 ${
            !menu ? "" : "bg-gray-50"
          }`}
        >
          <Link href="/" passHref>
            <h1 className="text-yellow-50 font-black text-sm sm:text-xl bg-lightblue py-1 px-2 sm:px-2.5 rounded cursor-pointer hover:bg-darkblue hover:text-yellow-75">
              HASHIRA
            </h1>
          </Link>
          <div onClick={toggleMenu} className="cursor-pointer">
            {menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-black h-7 sm:h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-black h-7 sm:h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
        <animated.div
          style={animation}
          className={`${menu ? "hidden" : "display"}`}
        >
          <MobileMenu />
        </animated.div>
      </header>
      <div
        className={`${
          !menu ? "opacity-30 blur-lg -mt-[970px]" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
