import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();

  return <div>ProductDetails
    <p>Product ID : {productId}</p>
  </div>;
}
