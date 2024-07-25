import React from "react";
import { Anime, AnimeTheme, Song as SongType } from "@/app/_types/video";
import Image from "next/image";

interface ThemeCardProps {
  image: string;
  song: SongType;
  anime: Anime;
  animeTheme: AnimeTheme
}

const defaultImage =
  "https://animeanime.global/wp-content/uploads/2020/06/335869.png";

const ThemeCard = ({ image, anime, song, animeTheme }: ThemeCardProps) => {
  const { name } = anime;
  return (
    <div className="flex flex-row rounded-lg overflow-hidden min-h-[60px] relative shadow-lg cursor-pointer ease-in duration-300 hover:scale-105">
      <div>
        <div className="border-t-4 border-y-amber-400" />
        <Image
          src={image! || defaultImage}
          alt={anime.name}
          objectFit="cover"
          height={0}
          width={150}
          style={{ height: "100px", width: "100%" }}
        />
      </div>
      <div className="p-2">
        <h1 className="text-xs font-semibold mb-3 line-clamp-1">{name}</h1>
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-xs font-normal"></h1>
            <h1 className="text-xs font-normal"></h1>
          </div>
          <div className="w-max h-max p-1 bg-amber-400 rounded-lg">
            <h1 className="text-xs text-white font-semibold"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
