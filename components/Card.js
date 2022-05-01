import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ id }) => {
  return (
    <Link href={`/gallery/?id=${id}`} passHref>
      <div className="cursor-pointer drop-shadow-2xl">
        <div className="">
          <Image
            src={`/${id}.jpeg`}
            className="rounded-xl"
            height={484}
            width={484}
            alt="hashira"
          />
        </div>
        <div className="mt-2 tracking-widest text-center bg-transparent">
          <h1 className="font-mono text-gray-500 text-xxxs sm:text-tiny">
            HASHIRA
          </h1>
          <h1 className="text-xxs sm:text-sm">NO. {id}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
