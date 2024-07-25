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

interface Resource {
  external_id?: number;
  animeresource?: AnimeResource;
}

interface AnimeResource {
  as?: string | null;
}

interface Image {
  id?: number;
  facet?: string;
  path?: string;
  link?: string;
}

interface AnimeTheme {
  id?: number;
  sequence?: number;
  slug?: string;
  type?: string;
  animethemeentries?: AnimeThemeEntry[];
  song?: Song;
}

interface AnimeThemeEntry {
  id?: number;
  episodes?: string;
  notes?: string;
  nsfw?: boolean;
  spoiler?: boolean;
  version?: number | null;
  videos?: Video[];
}

interface Video {
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

interface Song {
  id?: number;
  title?: string;
}
