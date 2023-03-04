export interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PreparedPostType extends PostType {
  date: string;
}