type Lines = string[];
export interface Novel {
  id: string;
  title: string;
  pages: Lines[];
}

export interface NovelMeta {
  id: number;
  uuid: string;
  category: string;
  title: string;
  filename: string;
  synopsis: string;
  likes: number;
  views: number;
  pages: number;
  words: number;
  readTime: number;
}
