import { BiCategory } from "react-icons/bi";

export default {
  name: "category",
  title: "Categoria",
  type: "document",
  icon: BiCategory,

  fields: [
    {
      name: "title",
      title: "Titulo",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
};
