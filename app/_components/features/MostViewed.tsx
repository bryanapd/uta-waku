"use client";

import React, { useEffect, useState } from "react";
import { fetchMostViewedThemes } from "@/app/_lib/fetchAnimeDetails";
import { Video, Videos } from "@/app/_types/video";
import ThemeCard from "../card/ThemeCard";

const MostViewed = () => {
  const [data, setData] = useState<Videos | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: Videos = await fetchMostViewedThemes();
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

  console.log("most viewed:", data);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-lg font-bold mb-4">{`Most Viewed`}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-7">
        {data.videos.map((video: Video) =>
          video.animethemeentries.map((aniEntries: any) => (
            <ThemeCard
              key={video.id}
              image={
                aniEntries.animetheme.anime.images &&
                aniEntries.animetheme.anime.images.length > 0 &&
                aniEntries.animetheme.anime.images[1].link
              }
              animeTheme={aniEntries.animetheme}
              anime={aniEntries.animetheme.anime}
              song={aniEntries.animetheme.song}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MostViewed;
