import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as Scroll } from "react-scroll";
import Container from "../components/Container";
import useStore from "../store";

export default function Careers() {
  const menu = useStore((state) => state.menu);
  return (
    <Container>
      <section className={`${!menu ? "bg-darkblue " : "bg-darkblue"}`}>
        <div className="flex flex-col py-8 space-y-4 tracking-widest text-center text-yellow-50 text-md px-7">
          <h1 className="text-4xl font-black leading-tight">
            CALLING ALL SKATERS
          </h1>
          <h1 className="text-xl leading-relaxed text-gray-300">
            We&apos;re looking for creative builders, makers, and doers. The
            ones who share our passion for web3, art, and culture. We&apos;re
            building for an open metaverse. Hope you don&apos;t mind breaking a
            few rules along the way.
          </h1>
          <Scroll to="footer" className="self-center">
            <button className="flex items-center px-8 py-5 space-x-2 text-sm text-gray-200 bg-gray-900 rounded-lg ">
              <h1 className="tracking-widest text-gray-50">OPEN POSITIONS</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Scroll>
        </div>
        <div className="relative flex rounded-lg grow bg-darkblue h-96">
          <Image
            src="/job_illo.png"
            className="object-cover "
            alt=""
            layout="fill"
            width={150}
          />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="text-xl tracking-wide text-gray-300 bg-black bg-gray-900">
        <div className="px-8 py-14 space-y-7">
          <div className="space-y-2">
            <h1 className="text-base font-bold tracking-wider text-gray-200">
              BENEFITS
            </h1>
            <h2>
              We offer generous benefits that encourage a healthy lifestyle,
              continous learning, and strong professional development. We aim to
              foster a culture of diverse perspectives, experiences, and
              backgrounds.
            </h2>
          </div>
          <div className="space-y-2">
            <h1 className="text-base font-semibold tracking-wider text-gray-500">
              HEALTH & WELLNESS
            </h1>
            <div className="space-y-2">
              <h2>Medical insurance</h2>
              <h2>Dental and vision insurance</h2>
              <h2>Health and wellness stipend</h2>
              <h2>WFH office stipend</h2>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-base font-semibold tracking-wider text-gray-500">
              PERKS
            </h1>
            <div className="space-y-2">
              <h2>401(k) retirement plan</h2>
              <h2>Relocation assistance</h2>
              <h2>Flexible working hours</h2>
              <h2>Unlimited PTO</h2>
              <h2>Commuter stipend</h2>
              <h2>Healthy snacks & unlimited Coke Zero</h2>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-base font-semibold tracking-wider text-gray-500">
              CULTURE & DEVELOPMENT
            </h1>
            <div className="space-y-2">
              <h2>Regular team happy hours & outings</h2>
              <h2>Conference travel</h2>
              <h2>Daily Wordle contests</h2>
            </div>
          </div>
        </div>
      </section>
      {/* POSITIONS */}
      <div className="text-xl leading-loose tracking-wide bg-gray-50">
        <div className="space-y-1">
          <Link href="/positions/artist" passHref>
            <div className="flex items-center justify-between py-6 pl-8 pr-4 bg-gray-100 cursor-pointer group">
              <div className="-space-y-1 tracking-wider">
                <h1 className="font-extrabold text-darkblue">ARTIST</h1>
                <h1 className="text-gray-800 text-md">
                  VANCOUVER <span className="text-gray-300">//</span> FULLTIME
                </h1>
                <h1 className="text-sm text-gray-500">CREATIVE</h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-gray-300 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    strokeWidth="1"
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="/positions/art-director" passHref>
            <div className="flex items-center justify-between py-6 pl-8 pr-4 bg-gray-100 cursor-pointer group">
              <div className="-space-y-1 tracking-wider">
                <h1 className="font-extrabold text-darkblue">
                  ART DIRECTOR, BRANDING
                </h1>
                <h1 className="text-gray-800 text-md">
                  VANCOUVER <span className="text-gray-300">//</span> FULLTIME
                </h1>
                <h1 className="text-sm text-gray-500">CREATIVE</h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-gray-300 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    strokeWidth="1"
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="/positions/engineer" passHref>
            <div className="flex items-center justify-between py-6 pl-8 pr-4 bg-gray-100 cursor-pointer group">
              <div className="-space-y-1 tracking-wider">
                <h1 className="font-extrabold text-darkblue">
                  SOFTWARE ENGINEER, FULL STACK
                </h1>
                <h1 className="text-gray-800 text-md">
                  VANCOUVER <span className="text-gray-300">//</span> FULLTIME
                </h1>
                <h1 className="text-sm text-gray-500">ENGINEERING</h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-gray-300 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    strokeWidth="1"
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="/positions/marketing-manager" passHref>
            <div className="flex items-center justify-between py-6 pl-8 pr-4 bg-gray-100 cursor-pointer group">
              <div className="-space-y-1 tracking-wider">
                <h1 className="font-extrabold text-darkblue">
                  MARKETING MANAGER
                </h1>
                <h1 className="text-gray-800 text-md">
                  VANCOUVER <span className="text-gray-300">//</span> FULLTIME
                </h1>
                <h1 className="text-sm text-gray-500">MARKETING</h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-gray-300 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    strokeWidth="1"
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="/positions/designer" passHref>
            <div className="flex items-center justify-between py-6 pl-8 pr-4 bg-gray-100 cursor-pointer group">
              <div className="-space-y-1 tracking-wider">
                <h1 className="font-extrabold text-darkblue">
                  DESIGNER, PRODUCT & MARKETING
                </h1>
                <h1 className="text-gray-800 text-md">
                  VANCOUVER <span className="text-gray-300">//</span> FULLTIME
                </h1>
                <h1 className="text-sm text-gray-500">CREATIVE</h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-gray-300 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    strokeWidth="1"
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <div className="h-20 bg-gray-100 border-b-2 border-gray-200"></div>
          {/* Footer */}
          <div className="bg-gray-50" id="footer">
            <div className="flex justify-between px-8 py-8 font-mono tracking-widest text-gray-500 text-tiny">
              <h1>© HASHIRA 2022</h1>
              <h1>DARWINBALINO@GMAIL.COM</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
