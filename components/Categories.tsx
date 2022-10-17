import React from "react";
import { Tab } from "@headlessui/react";

interface Props {
  categorie: Category[];
}

function Categories({categories}: Props) {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-center">
        {categories.map((category) => (
          <Tab
            key={category._id}
            id={category._id}
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected
                  ? "borderGradient bg-[#35383c] text-white"
                  : "border-[35383c border-b-2 text-[#747474]"
              }`
            }
          >
            {categorie.title}
          </Tab>
        ))}
        <Tab.Panels>
          {/* <Tab.Panels className="tabPainel">{showProducts(0)}</Tab.Panels>
                <Tab.Panels className="tabPainel">{showProducts(1)}</Tab.Panels>
                <Tab.Panels className="tabPainel">{showProducts(2)}</Tab.Panels>
                <Tab.Panels className="tabPainel">{showProducts(3)}</Tab.Panels> */}
        </Tab.Panels>
      </Tab.List>
    </Tab.Group>
  );
}

export default Categories;
