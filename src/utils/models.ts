interface Collection {
  id: string;
  title: string;
  content: string;
}

interface Tile {
  id: string;
  type: string;
  content: {
    html: string;
    images: string[];
    urls: string[];
  };
  tags: string[];
}

interface Comments {
  id: string;
  topic: string;
  parent: string;
  content: string;
}
