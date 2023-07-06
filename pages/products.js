import FrontLayout from "@/components/Layout";
import axios from "axios";
import React from "react";

const Products = () => {
  return (
    <FrontLayout>
      <h1>All Products</h1>
    </FrontLayout>
  );
};

export async function getServerSideProps(context) {
    const data = [];
    await axios.get(`http://localhost:1337/api/products?populate=*`).then((respose) => {
        
    }).catch((error) => {

    });
    return {
        
    }
}

export default Products;
