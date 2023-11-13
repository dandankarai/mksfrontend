import React from "react";
// import ProductCard from "@/components/ProductCard";
import { Header } from "@/components/Header";
// import { ToastContainer } from "react-toastify";
import api from "@/services/api";
// import Footer from "@/components/Footer";
import styled from "styled-components";
import { useState } from "react";
import { IProduct } from "@/utils/interfaces/interfaceProducts";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Container } from "./style";
import Card from "@/components/Card";
import { useDispatch } from "react-redux";
import { addCart, totalValue } from "@/slices/sliceProducts";
import MainSkeleton from "@/components/ContainerSkeleton";

const useProductsQuery = () => {
  return useQuery({
    queryKey: ["fetchProductsKey"],
    queryFn: async () => {
      try {
        const response = await api.get(
          "/products?page=1&rows=8&sortBy=id&orderBy=ASC"
        );
        return response.data;
      } catch (error) {
        console.log("Error fetching products", error);
        throw error;
      }
    },
  });
};

const Home = () => {
  const { isLoading, error, data: fetchProducts } = useProductsQuery();
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  const addItemToCard = (products: IProduct) => {
    dispatch(addCart(products));
    dispatch(totalValue());
  };

  return (
    <Container>
      <Header />
      <div className="list-products">
        <div className="div-cards">
          {isLoading && <MainSkeleton />}
          {error && <p>Error: {error.message}</p>}
          {!isLoading && !error && products && (
            <>
              {fetchProducts?.products.map((product: IProduct, index: any) => (
                <Card
                  key={index}
                  photo={product.photo}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                  addItemToCard={addItemToCard}
                  product={product}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
