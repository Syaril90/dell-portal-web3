import { ChevronLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import ProductCard from "../components/ProductCard"
import Header from '../components/Header';
import HeaderNav from "../components/HeaderNav";



export default function Home({ productsData }) {

  const previousPage = "Shop Laptop Computers & 2-in-1 PCs"

  return (
    <div className="h-screen w-full overflow-hidden overflow-y-scroll">
      <Header />
      <HeaderNav />
      <div className="flex m-3 items-center space-x-2 text-xs text-blue-500">
        <ChevronLeftIcon className="w-4 h-4" />
        <div>{previousPage}</div>
      </div>
      <div className="p-5 flex flex-wrap space-x-3">
        {productsData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  var productsData = await axios.get('http://localhost:3000/api/products').data;

  return {
    props: { productsData }
  }
}