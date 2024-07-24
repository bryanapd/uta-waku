"use client";

import React, { useEffect, useState } from "react";
import { fetchSeasonalAnime } from "@/app/_lib/fetchAnimeDetails";
import { getCurrentSeason } from "@/app/_lib/util";
import { Anime, AnimeDetails } from "@/app/_types/anime";
import AnimeCard from "../card/AnimeCard";

const SeasonalAnime = () => {
  const [data, setData] = useState<AnimeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const { year, season } = getCurrentSeason();

  const defaultImage =
    "https://animeanime.global/wp-content/uploads/2020/06/335869.png";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: AnimeDetails = await fetchSeasonalAnime(year, season);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year, season]);

  if (loading) return <p>Loading....</p>;
  if (!data) return <p>No data available.</p>;

  console.log("data", data);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-lg font-bold mb-4">{`${season} ${year}`}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-7">
        {data.anime.map((anime: Anime) => (
          <AnimeCard
            key={anime.id}
            image={
              anime.images && anime.images.length > 0
                ? anime.images[0].link
                : defaultImage
            }
            {...anime}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonalAnime;
