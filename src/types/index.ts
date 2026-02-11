export interface Artist {
  name: string;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
}

export interface Sound {
  id: number;
  title: string;
  link: string;
  artist: Artist;
  album: Album;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  role: string[];
}

export interface Photo {
  title: string;
  description: string;
  image: string;
}

export interface Page {
  id: number;
  name: string;
  path: string;
}
