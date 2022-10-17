import Image from "next/image";
import { urlFor } from "../sanity";
interface Props {
  products: Product[];
}

function Products({ product }): Props {
  console.log(product);
  // return (
  //   <div>
  //     <div>
  //       <Image
  //         src={urlFor(product.image[0].url())}
  //         layout="fill"
  //         objectFit="contain"
  //       />
  //     </div>
  //   </div>
  // );
}

export default Products;
