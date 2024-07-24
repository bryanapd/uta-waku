export interface AnimeDetails {
  anime: Anime[];
}

export interface Anime {
  id: number;
  name: string;
  media_format?: string;
  season?: string;
  slug?: string;
  synopsis?: string;
  year?: number;
  resources?: Resource[];
  image?: string; 
  images?: Image[];
  animethemes?: AnimeTheme[];
}

export interface Resource {
  external_id?: number;
  animeresource?: AnimeResource;
}

export interface AnimeResource {
  as?: string | null;
}

export interface Image {
  id?: number;
  facet?: string;
  path?: string;
  link?: string;
}

export interface AnimeTheme {
  id?: number;
  sequence?: number;
  slug?: string;
  type?: string;
  animethemeentries?: AnimeThemeEntry[];
  song?: Song;
}

export interface AnimeThemeEntry {
  id?: number;
  episodes?: string;
  notes?: string;
  nsfw?: boolean;
  spoiler?: boolean;
  version?: number | null;
  videos?: Video[];
}

export interface Video {
  id?: number;
  basename?: string;
  filename?: string;
  lyrics?: boolean;
  nc?: boolean;
  overlap?: string;
  path?: string;
  resolution?: number;
  size?: number;
  source?: string;
  subbed?: boolean;
  uncen?: boolean;
  tags?: string;
  link?: string;
}

export interface Song {
  id?: number;
  title?: string;
}
