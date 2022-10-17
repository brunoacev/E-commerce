import { BiAddToQueue } from "react-icons/bi";

export default {
  name: "product",
  title: "Produtos",
  type: "document",
  icon: BiAddToQueue,
  fields: [
    {
      name: "title",
      title: "Titulo",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Imagem",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "category" }],
    },
    { name: "price", title: "Preço", type: "number" },
    { name: "description", title: "Descrição", type: "blockContent" },
  ],
};
