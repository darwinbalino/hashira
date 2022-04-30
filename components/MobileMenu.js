import Link from "next/link";
import React from "react";
import useStore from "../store";

const MobileMenu = () => {
  const toggleMenu = useStore((state) => state.toggleMenu);
  const menu = useStore((state) => state.menu);

  return (
    <div className="flex flex-col space-y-4 font-black text-2.5xl px-6 pt-4">
      {/* <div className="flex relative flex-col backdrop-blur-xl space-y-4 font-black text-2.5xl px-6 pt-24"></div> */}
      <Link href="/" passHref>
        <div
          className="w-full pb-3 border-b border-gray-400 cursor-pointer"
          onClick={() => toggleMenu(!menu)}
        >
          HOME
        </div>
      </Link>
      <Link href="/gallery" className="" passHref>
        <div
          className="w-full pb-3 border-b border-gray-400 cursor-pointer"
          onClick={() => toggleMenu(!menu)}
        >
          GALLERY
        </div>
      </Link>
      {/* Fix rest of em */}

      <Link href="/" passHref>
        <div
          onClick={() => toggleMenu(!menu)}
          className="w-full pb-3 border-b border-gray-400 cursor-pointer"
        >
          THE GARDEN
        </div>
      </Link>
      <Link href="/careers" passHref>
        <div
          className="w-full pb-3 border-b border-gray-400 cursor-pointer"
          onClick={() => toggleMenu(!menu)}
        >
          CAREERS
        </div>
      </Link>

      <Link href="/manifesto" passHref>
        <div
          onClick={() => toggleMenu(!menu)}
          className="w-full pb-3 border-b border-gray-400 cursor-pointer"
        >
          MANIFESTO
        </div>
      </Link>
      <div className="pb-3 border-b border-gray-400 cursor-pointer">
        MINDMAP
      </div>
      <div className="pb-3 border-b border-gray-400 cursor-pointer">SHOP</div>
      <a
        onClick={() => toggleMenu(!menu)}
        className="w-full pb-3 border-b border-gray-400 cursor-pointer"
        href="https://www.instagram.com/azuki"
      >
        INSTAGRAM
      </a>
      <a
        onClick={() => toggleMenu(!menu)}
        className="w-full pb-3 border-b border-gray-400 cursor-pointer"
        href="https://discord.com/invite/azuki"
      >
        DISCORD
      </a>
      <a
        onClick={() => toggleMenu(!menu)}
        className="w-full pb-3 border-b border-gray-400 cursor-pointer"
        href="https://opensea.io/collection/azuki"
      >
        OPENSEA
      </a>

      <div className="py-10 pb-24 space-y-1 font-mono font-thin tracking-wide text-gray-700 text-tiny">
        <h1>NULLIUS LABS, INC © 2022</h1>
        <h1>MADE IN VANCOUVER, BC</h1>
        <h1>DARWINBALINO@GMAIL.COM</h1>
      </div>
    </div>
  );
};

export default MobileMenu;
