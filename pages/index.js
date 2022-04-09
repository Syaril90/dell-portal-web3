import { ChevronLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import ProductCard from "../components/ProductCard"
import Header from '../components/Header';
import HeaderNav from "../components/HeaderNav";
import Login from "../components/Login";
import { useState } from "react";
import { useMoralis } from "react-moralis";


export default function Home({ productsData }) {

  const previousPage = "Shop Laptop Computers & 2-in-1 PCs"
  const { isAuthenticated } = useMoralis();
  console.log("ini", isAuthenticated);

  return (
    isAuthenticated ?
      (<div className="h-screen w-full overflow-hidden overflow-y-scroll">
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
      </div>) : <Login />
  )
}

export async function getStaticProps() {
  const productsData = await axios.get('http://localhost:3000/api/products').then((res) => res.data);

  return {
    props: { productsData }
  }
}