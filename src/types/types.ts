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
