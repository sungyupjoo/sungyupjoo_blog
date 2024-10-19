export type category = "coding" | "music" | "art" | "food" | "travel";

export enum categoryColor {
  // globals.css와 일치해야함
  coding = "#ffb14f",
  music = "#789cff",
  art = "#775aec",
  food = "#ff7887",
  travel = "#7fb881",
}

export const categoryList: category[] = [
  "coding",
  "music",
  "art",
  "food",
  "travel",
];

export type authenticationStatus = "authenticated" | "unauthenticated";

export type CategoryType = {
  _id: string;
  slug: string;
  title: string;
  img: string;
  Posts: PostType[];
};

export type PostType = {
  _id: string;
  createdAt: string;
  title: string;
  slug: string;
  desc: string;
  img?: string;
  views: number;
  catSlug: string;
  cat: string;
  userEmail: string;
  user: User;
  comments: Comment[];
};

export type User = {
  _id: string;
  name: string;
  email: string;
  img?: string;
};

export type Comment = {
  _id: string;
  desc: string;
  createdAt: string;
  userEmail: string;
  user: User;
};
