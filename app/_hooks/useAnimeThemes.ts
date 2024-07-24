import axios from "axios";
import { useQuery } from "react-query";

const fetchAnimeDetails = async () => {
  const { data } = await axios.get("https://api.animethemes.moe/anime");
  return data;
};

const useAnimeDetails = () => {
  return useQuery("animeDetails", fetchAnimeDetails, {
    cacheTime: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: 0,
    refetchIntervalInBackground: false,
  });
};

export default useAnimeDetails;
