import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Tab } from "@headlessui/react";
import Headers from "../components/Headers";
import Landing from "../components/Landing";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";

interface Props {
  categories: Category[];
  products: Product[];
}
const Home = ({ categories, products }: Props) => {
  console.log(products);


  return (
    <div className="">
      <Head>
        <title>Market Place</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers />
      <main className="relative h-[200vh] bg-[#e7ecee]">
        <Landing />
      </main>

      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Novas Promoções
          </h1>

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
                  {category.title}
                </Tab>
              ))}
              {/* <Tab.Panels>
                <Tab.Panels className="tabPainel">{showProducts(0)}</Tab.Panels>
                <Tab.Panels className="tabPainel">{showProducts(1)}</Tab.Panels>
                <Tab.Panels className="tabPainel">{showProducts(2)}</Tab.Panels>
                <Tab.Panels className="tabPainel">{showProducts(3)}</Tab.Panels>
              </Tab.Panels> */}
            </Tab.List>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  return {
    props: {
      categories,
      products,
    },
  };
};
