export type SpecsFilter = {
  species: string[];
  age: string[];
  size: string[];
  gender: string[];
};
export type Animal = {
  id: number;
  name: string;
  specs: {
    species: string;
    age: string;
    size: string;
    gender: string;
  };
  imgs: { src: string; alt: string }[];
};
export const animals: Animal[] = [
  {
    id: 0,
    name: "Max",
    specs: { species: "dog", age: "young", size: "medium", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 1,
    name: "Tom",
    specs: { species: "cat", age: "puppy", size: "small", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 2,
    name: "sasha",
    specs: { species: "rabbit", age: "adult", size: "small", gender: "female" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 3,
    name: "scarlet",
    specs: {
      species: "horse",
      age: "adult",
      size: "extra large",
      gender: "female",
    },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 4,
    name: "tweety",
    specs: { species: "bird", age: "young", size: "small", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 5,
    name: "Max",
    specs: { species: "dog", age: "young", size: "medium", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 6,
    name: "Tom",
    specs: { species: "cat", age: "puppy", size: "small", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 7,
    name: "sasha",
    specs: { species: "rabbit", age: "adult", size: "small", gender: "female" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 8,
    name: "scarlet",
    specs: {
      species: "horse",
      age: "adult",
      size: "extra large",
      gender: "female",
    },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 9,
    name: "tweety",
    specs: { species: "bird", age: "young", size: "small", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 10,
    name: "Max",
    specs: { species: "dog", age: "young", size: "medium", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Uiy-5lDV8xPcpy32U3gx7uqXLmHhi1tNt5qnJgaCCgc6RiCjiNePMTyVgVF4wrDqjgQ&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 11,
    name: "Tom",
    specs: { species: "cat", age: "puppy", size: "small", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtObZOGto7ZFkmOcyF3H-cDTKIIxeNG1qs0qqsbsANMCHbR-Ww3M22PTaSa88v3sTtEaw&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 12,
    name: "sasha",
    specs: { species: "rabbit", age: "adult", size: "small", gender: "female" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzIF1wX6f4GAIQAe1nrpb-SaUTCn4Dc850FhROYwGnebYDBKL2pZuFiU544f1LiEsfCE&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 13,
    name: "scarlet",
    specs: {
      species: "horse",
      age: "adult",
      size: "extra large",
      gender: "female",
    },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJj7BFZpqQpcC4Job8IIRDZ0kc_8MYgYIvTCtq34oBTVgR5u4wdYqBKe44Oq32kPIQcc&usqp=CAU",
        alt: "test",
      },
    ],
  },
  {
    id: 14,
    name: "tweety",
    specs: { species: "bird", age: "young", size: "small", gender: "male" },
    imgs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOyWJGgl4IoJ-hFyqbs7xuKKDQqFBD6M6ARboGU0tiOxmS_DvWUXWGdPFr4I8VRPodW0&usqp=CAU",
        alt: "test",
      },
    ],
  },
];
