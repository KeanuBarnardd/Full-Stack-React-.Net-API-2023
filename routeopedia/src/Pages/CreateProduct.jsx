import React from "react";
import { useNavigate } from "react-router-dom";
export default function CreateProduct() {
  const navigate = useNavigate();

  return (
    <div>
      CreateProduct
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
