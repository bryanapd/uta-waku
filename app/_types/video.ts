export interface Audio {
  id: number;
  basename: string;
  filename: string;
  path: string;
  size: number;
  link: string;
}

export interface Image {
  id: number;
  facet: string;
  path: string;
  link: string;
}

export interface ArtistSong {
  as: string;
}

export interface Artist {
  id: number;
  name: string;
  slug: string;
  artistsong: ArtistSong;
}

export interface Song {
  id: number;
  title: string;
  artists: Artist[];
}

export interface Anime {
  id: number;
  name: string;
  media_format: string;
  season: string;
  slug: string;
  synopsis: string;
  year: number;
  images: Image[];
}

export interface AnimeTheme {
  id: number;
  sequence: number;
  slug: string;
  type: string;
  anime: Anime;
  group: string | null;
  song: Song;
}

export interface AnimeThemeEntry {
  id: number;
  episodes: string;
  notes: string | null;
  nsfw: boolean;
  spoiler: boolean;
  version: string | null;
  animetheme: AnimeTheme;
}

export interface Video {
  id: number;
  basename: string;
  filename: string;
  lyrics: boolean;
  nc: boolean;
  overlap: string;
  path: string;
  resolution: number;
  size: number;
  source: string;
  subbed: boolean;
  uncen: boolean;
  tags: string;
  link: string;
  audio: Audio;
  animethemeentries: AnimeThemeEntry[];
}

export interface Videos {
  videos: Video[];
}
