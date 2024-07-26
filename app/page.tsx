import React from "react";
import SeasonalAnime from "./_components/features/SeasonalAnime";
import RecentlyAdded from "./_components/features/RecentlyAdded";
import MostViewed from "./_components/features/MostViewed";

export default function Home() {
  return (
    <div className="sm:container md:container lg:container xl:container mx-auto pb-10">
      <SeasonalAnime />
      <RecentlyAdded />
      <MostViewed />
    </div>
  );
}