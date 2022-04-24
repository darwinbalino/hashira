import Link from "next/link";
import React from "react";
import { animated, config, useSpring } from "react-spring";
import MobileMenu from "../components/MobileMenu";
import useStore from "../store";

export default function Container({ children }) {
  const toggleMenu = useStore((state) => state.toggleMenu);
  const menu = useStore((state) => state.menu);
  const animation = useSpring({
    opacity: menu ? 0 : 1,
    config: config.molasses,
  });

  return (
    <div>
      <div className={`${!menu ? "bg-white opacity-100" : "bg-darkblue"}`}>
        <header className="sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-7">
            <Link href="/">
              <h1 className="text-yellow-50 font-black text-xl bg-lightblue py-1 px-2.5 rounded-lg cursor-pointer hover:bg-darkblue hover:text-yellow-75">
                HASHIRA
              </h1>
            </Link>
            <div onClick={toggleMenu} className="cursor-pointer">
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
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
        {/* Content */}
        <div
          className={`${
            !menu ? "opacity-30 blur-lg -mt-[970px]" : "opacity-100"
          }`}
        >
          {children}
        </div>
        {/* Filter */}
      </div>
    </div>
  );
}