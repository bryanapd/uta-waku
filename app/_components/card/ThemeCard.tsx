import React from "react";
import { Anime, AnimeTheme, Song as SongType } from "@/app/_types/video";
import Image from "next/image";

interface ThemeCardProps {
  image: string;
  song: SongType;
  anime: Anime;
  animeTheme: AnimeTheme;
}

const defaultImage =
  "https://animeanime.global/wp-content/uploads/2020/06/335869.png";

const ThemeCard = ({ image, anime, song, animeTheme }: ThemeCardProps) => {
  const { name } = anime;
  const { slug } = animeTheme;
  const { title, artists } = song;
  return (
    <div className="flex flex-row rounded-lg bg-white overflow-hidden max-h-[64px] relative shadow-lg cursor-pointer ease-in duration-300 hover:scale-105">
      <Image
        src={image! || defaultImage}
        alt={anime.name}
        objectFit="cover"
        height={0}
        width={150}
        className="h-full w-full max-w-[48px]"
      />
      <div className="p-2">
        <h1 className="text-xs font-semibold line-clamp-1">{`${name}`}</h1>
        <div className="justify-between items-center">
          <div className="flex flex-row items-center">
            <p className="text-xs font-normal">{slug}</p>
            <p className="mx-1 text-lg text-gray-600">&#x2022;</p>
            <h1 className="text-xs font-semibold line-clamp-1">{song.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
