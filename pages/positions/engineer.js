import Link from "next/link";
import Container from "../../components/Container";

export default function Positions() {
  return (
    <div className="bg-darkblue">
      <Container>
        <section className="py-8 space-y-4 tracking-widest text-yellow-50 text-md px-7">
          <div className="max-w-[126px] cursor-pointer pb-3">
            <div className="flex items-center space-x-1 text-sm text-blue-200 border-b border-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <Link href="/careers" passHref>
                <h1 className="">ALL CAREERS</h1>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl font-black leading-tight">
            SOFTWARE ENGINEER, FULL STACK
          </h1>
          <div className="flex items-center space-x-4 font-light">
            <h1>ENGINEERING</h1>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h1>VANCOUVER</h1>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h1>FULL TIME</h1>
            </div>
          </div>
        </section>
        {/* Description */}
        <section className="pb-3 text-xl leading-loose tracking-wide bg-gray-100 ">
          <div className="px-8 space-y-5 py-14">
            <h1 className="">
              Hashira is the corner of the internet where art, community, and
              culture fuse to create magic. We are the skaters of the internet,
              and we’re not afraid to push the boundaries. The lines between the
              physical and digital worlds are blurring as we build towards an
              open metaverse. We’re bringing together the right team to help
              take us there.
            </h1>
            <h1 className="font-extrabold">THE ROLE</h1>
            <h1>
              Our mission is to create the largest decentralized brand in the
              metaverse along with our community. We are seeking exceptional
              full-stack software engineers to join us in this journey and help
              us create delightful experiences in this incredibly fast-paced
              web3 space. You will be working alongside a passionate team that
              is heavily experienced in crypto, big tech, and startups.
            </h1>
            <h1 className="font-extrabold">THE IDEAL CANDIDATE WILL</h1>
            <div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Have technical expertise in our stack (React, Typescript,
                  Next.js, Node, HTML/CSS, Tailwind)
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Work closely with stakeholders across different functions
                  (design, product, business) to convert product goals into
                  robust and maintainable technical solutions
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Own various components end to end with an understanding of how
                  they fit into the overall system
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Maintain strong attention to detail while operating in a fast
                  paced environment
                </h1>
              </div>
            </div>
            <h1 className="font-extrabold">REQUIREMENTS</h1>
            <div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Experience as a builder and owner of a particular complex
                  component or system that’s large in scope
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Experience navigating ambiguous territory and making
                  appropriate tradeoffs
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Experience developing with little to no supervision, biasing
                  towards action to resolve open questions
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>Experience in Solidity a plus</h1>
              </div>
            </div>
            <h1 className="font-extrabold">
              WHY YOU’LL LOVE BEING PART OF THE HASHIRA CORE TEAM
            </h1>
            <div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  You will play a key role in defining the future of Hashira as
                  a brand
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  You will have an opportunity to work with an ambitious team of
                  fun, creative, and forward-thinking entrepreneurs
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  We will always be at the bleeding edge of web3 technology with
                  experimentation in our DNA
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  We offer an incredible benefits package including 100% company
                  paid medical/dental/vision insurance, unlimited paid time off,
                  and access to our future drops
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* Form */}
        <div className="px-8 pb-48 bg-gray-100">
          <section className="leading-loose tracking-widest border border-gray-300 bg-gray-50">
            <div className="px-6 py-6">
              <h1 className="font-bold text-1.5xl tracking-wide pb-8">
                APPLY FOR THIS ROLE
              </h1>
              <form action="" className="flex flex-col space-y-6 text-sm">
                <label className="relative cursor-pointer">
                  <input
                    type="text"
                    placeholder="input"
                    className="w-full placeholder-black placeholder-opacity-0 transition duration-200 bg-gray-500 border border-gray-100 focus:outline-none"
                  />
                  <span className="absolute transition duration-200 left-1 top-1 input-text">
                    FULL NAME
                  </span>
                </label>
                <label className="relative cursor-pointer">
                  <input
                    type="text"
                    placeholder="input"
                    className="w-full placeholder-black placeholder-opacity-0 transition duration-200 bg-gray-500 border border-gray-100 focus:outline-none"
                  />
                  <span className="absolute transition duration-200 left-1 top-1 input-text">
                    PHONE NUMBER
                  </span>
                </label>
                <label className="relative cursor-pointer">
                  <input
                    type="text"
                    placeholder="input"
                    className="w-full placeholder-black placeholder-opacity-0 transition duration-200 bg-gray-500 border border-gray-100 focus:outline-none"
                  />
                  <span className="absolute transition duration-200 left-1 top-1 input-text">
                    EMAIL
                  </span>
                </label>
                <input type="file" />
                <label className="relative cursor-pointer">
                  <input
                    type="text"
                    placeholder="input"
                    className="w-full placeholder-black placeholder-opacity-0 transition duration-200 bg-gray-500 border border-gray-100 focus:outline-none"
                  />
                  <span className="absolute transition duration-200 left-1 top-1 input-text">
                    LINKEDIN (OPTIONAL)
                  </span>
                </label>
                <label className="relative cursor-pointer">
                  <input
                    type="text"
                    placeholder="input"
                    className="w-full placeholder-black placeholder-opacity-0 transition duration-200 bg-gray-500 border border-gray-100 focus:outline-none"
                  />
                  <span className="absolute transition duration-200 left-1 top-1 input-text">
                    LINK TO PORTFOLIO (OPTIONAL)
                  </span>
                </label>
                <label className="relative cursor-pointer">
                  <input
                    type="text"
                    placeholder="input"
                    className="w-full placeholder-black placeholder-opacity-0 transition duration-200 bg-gray-500 border border-gray-100 focus:outline-none"
                  />
                  <span className="absolute transition duration-200 left-1 top-1 input-text">
                    ADDITIONAL LINK (OPTIONAL)
                  </span>
                </label>
                <button className="w-full h-16 tracking-wider text-center text-gray-100 bg-black text-tiny">
                  SUBMIT APPLICATION
                </button>
              </form>
            </div>
          </section>
        </div>
        <footer className="flex justify-between px-8 py-10 font-mono tracking-widest text-gray-400 bg-gray-100 border-t-2 border-gray-200 text-tiny">
          <h1>© HASHIRA 2022</h1>
          <h1>DARWINBALINO@GMAIL.COM</h1>
        </footer>
      </Container>
    </div>
  );
}
