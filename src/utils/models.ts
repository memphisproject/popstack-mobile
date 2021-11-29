export interface Collection {
  id: string;
  title: string;
  content: string;
}

export interface Tile {
  id: string;
  type: string;
  content: {
    html: string;
    images: string[];
    urls: string[];
  };
  tags: string[];
}

export interface Comments {
  id: string;
  topic: string;
  parent: string;
  content: string;
}
