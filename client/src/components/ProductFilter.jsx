import React, { useContext } from "react";
import { Context } from "../index.js";
import CustomAccordion from "./UI/accordion/CustomAccordion.jsx";

const ProductFilter = () => {
  const { product } = useContext(Context);
  return (
    <div>
      <CustomAccordion title={'Типы'} items={product.types}/>
      <CustomAccordion title={'Типы'} items={product.types}/>
      <CustomAccordion title={'Типы'} items={product.types}/>
    </div>
  );
};

export { ProductFilter };
