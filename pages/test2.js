import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Modal } from "../components/Modal";
import ModalDetails from "../components/ModalDetails";
import useStore from "../store";
import { connectToDatabase } from "../util/mongodb";
export default function Test2({ unfilteredNfts }) {
  console.log(unfilteredNfts);
  const router = useRouter();
  const [nfts, setNfts] = useState(unfilteredNfts);
  const shuffleArray = (arr) => arr.sort((a, b) => 0.5 - Math.random());

  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const sidebar = useStore((state) => state.sidebar);

  const [types, setTypes] = useState([
    { id: 1, checked: false, label: "human" },
    { id: 2, checked: false, label: "blue" },
    { id: 3, checked: false, label: "red" },
    { id: 4, checked: false, label: "spirit" },
  ]);

  // const handleSelectCategory = (event, value) =>
  //   !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const typesStateList = types;
    const changeCheckedTypes = typesStateList.map((type) =>
      type.id === id ? { ...type, checked: !type.checked } : type
    );
    setTypes(changeCheckedTypes);
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
  const applyFilters = () => {
    let updatedNfts = nfts;

    // Gold Filter
    // if (selectedCategory) {
    //   updatedNfts = updatedNfts.filter(
    //     (nft) => nft.category === selectedCategory
    //   );
    // }

    // Type Filter
    const typesChecked = types
      .filter((nft) => nft.checked)
      .map((nft) => nft.label.toLowerCase());

    if (typesChecked.length) {
      updatedNfts = updatedNfts.filter((nft) =>
        typesChecked.includes(nft.cuisine)
      );
    }

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
  }, [types]);

  return (
    <div className="relative overflow-hidden">
      {router.query.id && (
        <Modal
          onClose={() => {
            router.push("/gallery");
          }}
        >
          <ModalDetails id={router.query.id} />
        </Modal>
      )}
      <div className={`${!sidebar ? "opacity-40" : "opacity-100"}`}>
        <div className="sticky top-0 z-10 bg-gray-50">
          {/* Top Header */}
          <div className="flex items-center justify-between px-4 px-6 py-7">
            <h1 className="text-yellow-50 font-black text-xl bg-lightblue py-1 px-2.5 rounded-lg cursor-pointer hover:bg-darkblue hover:text-yellow-75">
              HASHIRA
            </h1>
            <div className="cursor-pointer">
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
            </div>
          </div>
          {/* Bottom Header */}
          <div className="flex items-center justify-between px-6 pb-5 border-b border-gray-300">
            <h1 className="items-center text-2xl font-black">
              <span>HASHIRAS</span> <span className="text-gray-300">//</span>
              <span className="font-thin tracking-wider text-gray-400">
                {" "}
                10000
              </span>
            </h1>
            <div class="flex space-x-4">
              {/* Shuffle Button*/}
              <svg
                onClick={() => setNfts(shuffleArray(nfts))}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 cursor-pointer hover:text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* Filter Button */}
              <div
                onClick={toggleSidebar}
                className="flex items-center space-x-3 cursor-pointer hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-mono tracking-wider text-tiny">FILTER</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center pt-6 pl-5 space-x-4 font-mono">
          <h1 className="text-sm font-bold tracking-wider text-gray-500">
            FILTERS
          </h1>
          <h1 className="px-2 py-0.5 text-gray-500 bg-gray-200 rounded-md text-xs">
            0
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-5 px-5 mt-5 lg:grid-cols-4">
          {nfts.map((nft, i) => (
            <Card key={i} id={nft.id} />
          ))}
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={
          sidebar
            ? "bg-gray-50 shadow-2xl space-y-6 w-[380px] absolute inset-y-0 right-0 transform translate-x-full transition duration-200 ease-in-out"
            : "bg-gray-50 shadow-2xl z-10 space-y-6 w-[380px] absolute inset-y-0 right-0 transform transition duration-200 ease-in-out"
        }
      >
        <div className="font-bold tracking-wide">
          <div className="flex justify-between border-b border-gray-400 px-7 py-7 items-cente">
            <h1>FILTERS</h1>
            <svg
              onClick={toggleSidebar}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 cursor-pointer gray-600"
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
          </div>
          <div className="flex flex-col font-mono">
            <div className="px-5 py-5 border-b border-gray-400">
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-2">
                  <Image
                    src={"/type.png"}
                    className=""
                    height={34}
                    width={34}
                  />
                  <h1>TYPE</h1>
                </div>
                <h1 className="text-1.5xl font-medium">+</h1>
              </div>
              <div className="pt-5 pl-3 space-y-2 text-sm font-thin tracking-widest text-gray-600">
                <div className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                  <input
                    onChange={() => handleChangeChecked(1)}
                    type="checkbox"
                    className=""
                  />
                  <label>HUMAN</label>
                  <label className="text-sm text-gray-400">(9018)</label>
                </div>
                <div className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                  <input type="checkbox" className="px-4 py-4 rounded-xl" />
                  <label>BLUE</label>
                  <label className="text-sm text-gray-400">(444)</label>
                </div>
                <div className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                  <input type="checkbox" className="px-4 py-4 rounded-xl" />
                  <label>RED</label>
                  <label className="text-sm text-gray-400">(441)</label>
                </div>
                <div className="flex items-center w-full py-3 space-x-3 cursor-pointer">
                  <input type="checkbox" className="px-4 py-4 rounded-xl" />
                  <label>SPIRIT</label>
                  <label className="text-sm text-gray-400">(97)</label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/special.png"}
                  className=""
                  height={34}
                  width={34}
                />
                <h1>SPECIAL</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/clothing.png"}
                  className=""
                  height={34}
                  width={34}
                />
                <h1>CLOTHING</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/offhand.png"}
                  className=""
                  height={34}
                  width={34}
                />
                <h1>OFFHAND</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image src={"/hair.png"} className="" height={34} width={34} />
                <h1>HAIR</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/headgear.png"}
                  className=""
                  height={34}
                  width={34}
                />
                <h1>HEADGEAR</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image src={"/face.png"} className="" height={34} width={34} />
                <h1>FACE</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image src={"/neck.png"} className="" height={34} width={34} />
                <h1>NECK</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image src={"/eyes.png"} className="" height={34} width={34} />
                <h1>EYES</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image src={"/mouth.png"} className="" height={34} width={34} />
                <h1>MOUTH</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image src={"/ear.png"} className="" height={34} width={34} />
                <h1>EAR</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/background.png"}
                  className=""
                  height={34}
                  width={34}
                />
                <h1>BACKGROUND</h1>
              </div>
              <h1 className="text-1.5xl font-medium">+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    const { db } = await connectToDatabase();

    const data = await db.collection("nfts").find({}).limit(20).toArray();

    const unfilteredNfts = JSON.parse(JSON.stringify(data));

    console.log(unfilteredNfts);
    return {
      props: { properties: { unfilteredNfts: unfilteredNfts } },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { properties: false },
    };
  }
}
