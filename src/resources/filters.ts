export type HomeSelect = { label: string; options: string[] };
export const homeFilters: HomeSelect[] = [
  {
    label: "species",
    options: ["dog", "cat", "rabbit", "horse", "bird"],
  },
  { label: "age", options: ["puppy", "young", "adult"] },
  {
    label: "size",
    options: ["small", "medium", "large", "extra large"],
  },
  { label: "gender", options: ["male", "female"] },
];
