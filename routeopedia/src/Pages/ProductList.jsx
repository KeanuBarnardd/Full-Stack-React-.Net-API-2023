import React from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
export default function ProductList() {
  const navigate = useNavigate();

  return (
    <div>
      ProductList
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
    </div>
  );
}
