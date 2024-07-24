"use client";

import React, { useEffect, useState } from "react";
import {
  fetchAnimeDetails,
  fetchAnimeImage,
} from "@/app/_lib/fetchAnimeDetails";
import { Anime, AnimeDetailsResponse } from "@/app/_types/anime";

const AnimeList = () => {
  const [data, setData] = useState<AnimeDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: AnimeDetailsResponse = await fetchAnimeDetails();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading....</p>;
  if (!data) return <p>No data available.</p>;

  console.log('data', data)

  return (
    <div className="container mx-auto">
      <h1 className="text-lg font-bold">Anime List</h1>
      <ul>
        {data.anime.map((anime: Anime) => (
          <li key={anime.id}>{anime.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
