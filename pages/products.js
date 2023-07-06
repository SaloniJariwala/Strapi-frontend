import dynamic from "next/dynamic";
import React from "react";
const FrontLayout = dynamic(() => import("@/components/Layout"));

const Products = () => {
    return (
        <FrontLayout>
            <h1>All Products</h1>
        </FrontLayout>
    );
};

export default Products;
