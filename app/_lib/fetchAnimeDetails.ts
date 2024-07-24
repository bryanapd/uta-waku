import axios from "axios";
import { AnimeDetailsResponse } from "../_types/anime";

export const fetchAnimeDetails = async (): Promise<AnimeDetailsResponse> => {
  const { data } = await axios.get<AnimeDetailsResponse>(
    "https://api.animethemes.moe/anime"
  );
  return data;
};

export const fetchAnimeImage = async (id: number): Promise<any> => {
  const { data } = await axios.get<any>(
    `https://api.animethemes.moe/image/${id}`
  );
  return data;
};
