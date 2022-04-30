import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import useStore from "../store";

export default function HomePage() {
  const menu = useStore((state) => state.menu);

  return (
    <div className="h-screen overflow-hidden">
      <Container>
        <div>
          <div className="flex flex-col justify-between h-screen">
            <div className={`${!menu ? "opacity-60" : "opacity-100"}`}>
              <Image
                src={"/mobilemeap.jpeg"}
                layout="fill"
                className="relative object-cover"
                alt=""
              />
            </div>
            {/* Banner */}
            <div className="relative bottom-32">
              <div className="relative z-10 flex justify-between h-24 mx-6 rounded-lg bg-darkblue drop-shadow-2xl">
                <Image
                  src={"/job_illo.png"}
                  className="relative object-cover"
                  alt=""
                  width={250}
                  height={300}
                />
                <Link href="/careers" passHref>
                  <button className="flex items-center justify-between px-4 my-5 mr-4 space-x-4 bg-gray-100 cursor-pointer drop-shadow-2xl">
                    <h1 className="font-bold font-xs">WE&apos;RE HIRING</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
