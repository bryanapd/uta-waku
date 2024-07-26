import React from "react";
import { Anime } from "@/app/_types/anime";
import Image from "next/image";

const AnimeCard = (props: Anime) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden min-h-[60px] relative shadow-lg cursor-pointer ease-in duration-300 hover:scale-105">
      <Image
        src={props.image!}
        alt={props.name}
        objectFit="cover"
        height={0}
        width={150}
        style={{ height: "auto", width: "100%" }}
      />
      <div className="border-t-4 border-y-amber-400" />
      <div className="p-2">
        <h1 className="text-lg font-semibold mb-3 line-clamp-1">{props.name}</h1>
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-xs font-normal">{props.season}</h1>
            <h1 className="text-xs font-normal">{props.year}</h1>
          </div>
          <div className="w-max h-max p-1 bg-amber-400 rounded-lg">
            <h1 className="text-xs text-white font-semibold">
              {props.media_format}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
