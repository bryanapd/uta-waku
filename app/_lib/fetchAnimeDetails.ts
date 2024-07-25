import axios from "axios";
import { AnimeDetails } from "../_types/anime";

export const fetchAnimeDetails = async (): Promise<AnimeDetails> => {
  const { data } = await axios.get<AnimeDetails>(
    "https://api.animethemes.moe/anime"
  );
  return data;
};

export const fetchRecentlyAddedThemes = async (): Promise<any> => {
  try {
    const { data } = await axios.get<any>(
      "https://api.animethemes.moe/video?sort=-id&include=animethemeentries.animetheme.group,animethemeentries.animetheme.anime.images,animethemeentries.animetheme.song.artists,audio&page[size]=10"
    );
    return data;
  } catch (error: any) {
    console.error("Error fetching recently added anime:", error);
    throw error;
  }
};

export const fetchSeasonalAnime = async (
  year: number,
  season: string
): Promise<AnimeDetails> => {
  try {
    const { data } = await axios.get<AnimeDetails>(
      `https://api.animethemes.moe/anime?include=images&filter[year]=${year}&filter[season]=${season}`
    );
    return data;
  } catch (error: any) {
    console.error("Error fetching seasonal anime:", error);
    throw error;
  }
};

export const fetchAnimeImage = async (id: number): Promise<any> => {
  const { data } = await axios.get<any>(
    `https://api.animethemes.moe/image/${id}`
  );
  return data;
};
