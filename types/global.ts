type Lines = string[];
export interface Novel {
  id: string;
  title: string;
  pages: Lines[];
}

export interface NovelMeta {
  id: string;
  uuid: string;
  category: string;
  title: string;
  filename: string;
  synopsis: string;
}
