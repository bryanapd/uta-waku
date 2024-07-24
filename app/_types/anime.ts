export interface Anime {
  id: number;
  name: string;
  media_format: "TV" | "Movie" | "OVA" | "Special" | "ONA" | "Other";
  season?: "Winter" | "Spring" | "Summer" | "Fall" | "Unknown";
  slug: string;
  synopsis: string;
  year: number;
}

export interface AnimeDetailsResponse {
  anime: Anime[];
}
