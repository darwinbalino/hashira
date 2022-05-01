import Link from "next/link";
import Container from "../../components/Container";

export default function Positions() {
  return (
    <div className="bg-darkblue">
      <Container>
        <section className="py-8 space-y-2 text-xs tracking-widest sm:space-y-4 text-yellow-50 sm:text-md px-7">
          <div className="max-w-[126px] cursor-pointer pb-3">
            <div className="flex items-center space-x-1 text-blue-300 border-b border-blue-400">
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
                <h1 className="text-xs sm:text-base">ALL CAREERS</h1>
              </Link>
            </div>
          </div>
          <h1 className="text-2.75xl font-black leading-tight sm:text-4xl">
            DESIGNER, PRODUCT & MARKETING
          </h1>
          <div className="flex items-center space-x-2 font-light sm:space-x-4">
            <h1>CREATIVE</h1>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 sm:h-6"
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
                className="h-5 sm:h-6"
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
        <section className="pb-3 text-base leading-loose tracking-wide bg-gray-100 sm:text-xl ">
          <div className="px-6 py-10 space-y-3 sm:px-8 sm:space-y-5 sm:py-14">
            <h1>
              Hashira is the corner of the internet where art, community, and
              culture fuse to create magic. We are the skaters of the internet,
              and we’re not afraid to push the boundaries. The lines between the
              physical and digital worlds are blurring as we build towards an
              open metaverse. We’re bringing together the right team to help
              take us there.
            </h1>
            <h1 className="font-extrabold sm:text-base">THE ROLE</h1>
            <h1>
              Our mission is to create the largest decentralized brand in the
              metaverse along with our community. We are seeking exceptional
              full-stack software engineers to join us in this journey and help
              us create delightful experiences in this incredibly fast-paced
              web3 space. You will be working alongside a passionate team that
              is heavily experienced in crypto, big tech, and startups.
            </h1>
            <h1 className="font-extrabold sm:text-base">
              THE IDEAL CANDIDATE WILL
            </h1>
            <div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Draw beautiful, compelling and engaging characters for the
                  Hashira universe
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Be able to take ideas from rough sketches to polished finished
                  pieces for both physical and digital products
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Have high proficiency with concept art fundamentals such as
                  composition, shape design, anatomy and proportion, color
                  theory and perspective
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Be excited by and experienced with finding inspiration from
                  historical, fantasy, scifi, mainstream trends, and pop culture
                  references
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Work within established art and design guidelines to ensure
                  consistency within the Hashira universe
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Work with fashion, marketing, and product teams to support
                  their art needs
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>Experience drawing environments is a plus </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>Experience with graphic design is a plus </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Excited to work on modern fashion and collectible products in
                  addition to digital art{" "}
                </h1>
              </div>
            </div>
            <h1 className="font-extrabold sm:text-base">REQUIREMENTS</h1>
            <div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  2+ years of professional experience as an illustrator or
                  concept artist
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Demonstrated proficiency with concept art supported by a
                  portfolio that showcases high-quality work from past projects{" "}
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Are skilled in explaining your work, process, and decisions to
                  cross-functional stakeholders and crave feedback to help you
                  produce your best work{" "}
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  You obsess over details and are excited to push the boundaries
                  of your skill set in art that excites and delights
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>
                  Love working with other artists, designers, and creatives to
                  have them help you learn and grow—and help them learn and grow
                </h1>
              </div>
              <div className="flex space-x-3">
                <h1 className="font-black">•</h1>
                <h1>Vancouver area preferred, remote ok </h1>
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
              <h1 className="pb-8 text-xl sm:text-1.5xl font-bold tracking-wide">
                APPLY FOR THIS ROLE
              </h1>
              <form
                action=""
                className="flex flex-col space-y-6 text-xxs sm:text-sm"
              >
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
                <button className="w-full h-12 tracking-wider text-center text-gray-100 bg-black text-xxs sm:h-16 sm:text-tiny">
                  SUBMIT APPLICATION
                </button>
              </form>
            </div>
          </section>
        </div>
        <footer className="flex justify-between px-8 py-10 font-mono tracking-widest text-gray-400 bg-gray-100 border-t-2 border-gray-200 text-xxs sm:text-tiny">
          <h1>© HASHIRA 2022</h1>
          <h1>DARWINBALINO@GMAIL.COM</h1>
        </footer>
      </Container>
    </div>
  );
}
