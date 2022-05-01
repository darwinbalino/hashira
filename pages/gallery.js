import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { OverlayProvider } from "react-aria";
import Card from "../components/Card";
import ContainerGallery from "../components/ContainerGallery";
import HeadlessSlideOver from "../components/HeadlessSlideOver";
import { Modal } from "../components/Modal";
import ModalDetails from "../components/ModalDetails";
import useStore from "../store";
import { connectToDatabase } from "../util/mongodb";

export default function Gallery({ properties }) {
  const router = useRouter();
  const [nfts, setNfts] = useState(properties);
  const shuffleArray = (arr) => arr.sort((a, b) => 0.5 - Math.random());

  const menu = useStore((state) => state.menu);

  const [filterCount, setFilterCount] = useState(0);

  const [goldFilter, setGoldFilter] = useState(false);

  const [types, setTypes] = useState([
    { id: 1, checked: false, label: "human" },
    { id: 2, checked: false, label: "blue" },
    { id: 3, checked: false, label: "red" },
    { id: 4, checked: false, label: "spirit" },
  ]);

  const handleChangeChecked = (id) => {
    const typesStateList = types;
    const changeCheckedTypes = typesStateList.map((type) =>
      type.id === id ? { ...type, checked: !type.checked } : type
    );
    setTypes(changeCheckedTypes);

    const typesChecked = changeCheckedTypes.filter((type) => type.checked);
    setFilterCount(typesChecked.length);
  };
  // const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  // const darkMode = useStore((state) => state.darkMode);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.querySelector("body").classList.add("dark");
  //   } else {
  //     document.querySelector("body").classList.remove("dark");
  //   }
  // }, [darkMode]);
  const applyFilters = async () => {
    let updatedNfts = await properties;

    // Type Filter
    const typesChecked = types
      .filter((type) => type.checked)
      .map((type) => type.label);

    if (typesChecked.length) {
      updatedNfts = updatedNfts.filter((nft) =>
        typesChecked.includes(nft.type)
      );
    }

    // Gold Filter
    if (goldFilter) {
      updatedNfts = updatedNfts.filter((nft) => nft.gold === true);
    }

    setNfts(shuffleArray(updatedNfts));
    // Search Filter
    // if (searchInput) {
    //   updatedNfts = updatedNfts.filter(
    //     (nft) =>
    //       nft.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
    //       -1
    //   );
    // }
  };

  useEffect(() => {
    applyFilters();
  }, [types, goldFilter]);

  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);

  const handleOnClose = () => setIsOpen(false);

  const isBrowser = typeof window !== "undefined";

  return isBrowser ? (
    <OverlayProvider>
      <div className="relative h-screen overflow-x-hidden">
        {router.query.id && (
          <Modal
            onClose={() => {
              router.push("/gallery");
            }}
          >
            <ModalDetails id={router.query.id} />
          </Modal>
        )}
        <ContainerGallery sidebar={isHeadlessOpen}>
          <div
            className={`sticky top-20 sm:top-24 ${
              isHeadlessOpen ? "z-0" : "z-10"
            }`}
          >
            <div className={`${!menu ? "bg-none " : "bg-gray-50"}`}>
              {/* Bottom Header */}

              <div className="flex items-center justify-between px-6 pb-5 border-b border-gray-300">
                <h1 className="items-center text-lg font-extrabold sm:font-black sm:text-2xl">
                  <span>HASHIRAS</span>{" "}
                  <span className="text-gray-300">//</span>
                  <span className="font-thin tracking-wider text-gray-400">
                    {" "}
                    10000
                  </span>
                </h1>
                <div className="flex space-x-4">
                  {/* Shuffle Button*/}
                  <svg
                    onClick={() => setGoldFilter(!goldFilter)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 cursor-pointer sm:h-6 hover:text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Filter Button */}
                  <div
                    onClick={() => setIsHeadlessOpen(true)}
                    className="flex items-center space-x-3 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 sm:h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h1 className="font-mono text-xs tracking-wider sm:text-tiny">
                      FILTER
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className={`${!menu ? "bg-white opacity-100" : "bg-gray-50"}`}>
            <div className="flex items-center pt-6 pl-5 space-x-4 font-mono">
              <h1 className="text-xs font-bold tracking-wider text-gray-500 sm:text-sm">
                FILTERS
              </h1>
              <h1 className="px-2 py-0.5 text-gray-500 bg-gray-200 rounded-md text-xxs">
                {filterCount}
              </h1>
            </div>
            {/* Nfts */}
            <div className="grid grid-cols-2 gap-4 px-5 mt-5 sm:gap-5 lg:grid-cols-4">
              {nfts.map((nft, i) => (
                <Card key={i} id={nft.id} />
              ))}
            </div>
          </div>
        </ContainerGallery>

        <HeadlessSlideOver open={isHeadlessOpen} setOpen={setIsHeadlessOpen}>
          {/* <div className="flex flex-col">
                  <Button
                    className="mt-4"
                    onClick={() => setIsHeadlessOpen(false)}
                  >
                    X
                  </Button>
                </div> */}

          <div className="font-bold tracking-wide">
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-400">
              <h1 className="text-sm font-bold tracking-wider sm:font-extrabold sm:text-lg">
                FILTERS
              </h1>
              <svg
                onClick={handleOnClose}
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-5 cursor-pointer sm:h-8 gray-600"
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
            </div>
            {/* Gold Filter */}
            <div className="flex flex-col font-mono text-xs sm:text-base">
              <div className="px-5 py-5 border-b border-gray-400">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center space-x-2">
                    <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                      <Image src={"/type.png"} layout="fill" alt="type" />
                    </div>
                    <h1>TYPE</h1>
                  </div>
                  <h1 className="text-1.5xl font-medium">+</h1>
                </div>
                <div className="pt-5 pl-3 font-thin tracking-widest text-gray-600 text-xxs sm:text-base sm:space-y-2 sm:text-sm">
                  <label className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                    <input
                      onChange={() => handleChangeChecked(1)}
                      type="checkbox"
                      className="text-grey-300 form-checkbox"
                    />
                    <span>HUMAN</span>
                    <span className="text-gray-400">(9018)</span>
                  </label>
                  <label className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                    <input
                      onChange={() => handleChangeChecked(2)}
                      type="checkbox"
                      className="text-grey-300 form-checkbox"
                    />
                    <span>BLUE</span>
                    <span className="text-gray-400">(444)</span>
                  </label>
                  <label className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                    <input
                      onChange={() => handleChangeChecked(3)}
                      type="checkbox"
                      className="text-grey-300 form-checkbox"
                    />

                    <span>RED</span>
                    <span className="text-gray-400">(441)</span>
                  </label>
                  <label className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                    <input
                      onChange={() => handleChangeChecked(4)}
                      type="checkbox"
                      className="text-grey-300 form-checkbox"
                    />
                    <span>SPIRIT</span>
                    <span className="text-gray-400">(97)</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/special.png"} layout="fill" alt="type" />
                  </div>
                  <h1>SPECIAL</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>

              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/clothing.png"} layout="fill" alt="type" />
                  </div>
                  <h1>CLOTHING</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/offhand.png"} layout="fill" alt="type" />
                  </div>
                  <h1>OFFHAND</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/hair.png"} layout="fill" alt="type" />
                  </div>
                  <h1>HAIR</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/headgear.png"} layout="fill" alt="type" />
                  </div>
                  <h1>HEADGEAR</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/face.png"} layout="fill" alt="type" />
                  </div>
                  <h1>FACE</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/neck.png"} layout="fill" alt="type" />
                  </div>
                  <h1>NECK</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/eyes.png"} layout="fill" alt="type" />
                  </div>
                  <h1>EYES</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/mouth.png"} layout="fill" alt="type" />
                  </div>
                  <h1>MOUTH</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/ear.png"} layout="fill" alt="type" />
                  </div>
                  <h1>EAR</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 sm:px-5 sm:py-5">
                <div className="flex items-center space-x-2">
                  <div className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] relative">
                    <Image src={"/background.png"} layout="fill" alt="type" />
                  </div>
                  <h1>BACKGROUND</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
            </div>
          </div>
        </HeadlessSlideOver>
      </div>
    </OverlayProvider>
  ) : null;
}

export async function getServerSideProps(context) {
  try {
    const { db } = await connectToDatabase();

    const data = await db.collection("nfts").find({}).limit(30).toArray();

    const unfilteredNfts = JSON.parse(JSON.stringify(data));

    return {
      props: { properties: unfilteredNfts },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { properties: false },
    };
  }
}
