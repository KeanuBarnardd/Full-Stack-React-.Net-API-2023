import React from "react";
import { useParams } from "react-router-dom";

export default function CryptoDetail() {
  const { cryptoSymbol, id } = useParams();

  return (
    <div>
      <h4>CryptoDetail</h4>
      <p>Symbol : {cryptoSymbol}</p>
      <p>Symbol : {id}</p>
    </div>
  );
}
