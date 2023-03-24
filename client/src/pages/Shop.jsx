import React, { useState, useContext, useEffect } from "react";
import { ProductList } from "../components/ProductList";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchProducts } from "../http/productAPI.js";
import { Pagination } from "../components/Pagination.jsx";

const Shop = observer(() => {
  const [sort, setSort] = useState(false);
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchProducts(null, product.limit, 1).then((data) => {
      product.setItems(data.rows);
      product.setTotalCount(data.count);
      product.setPageCount();
    });
  }, []);

  useEffect(() => {
    fetchProducts(product.selectedType.id, product.limit, product.page).then(
      (data) => {
        product.setItems(data.rows);
        product.setTotalCount(data.count);
        product.setPageCount();
      }
    );
  }, [product.page, product.selectedType]);

  return (
    <div>
      <div className="shop__toolbar">
        <div className="shop__toolbar__selected">
          {product.selectedType.name /* .toLowerCase() */}
        </div>
        <div
          className="shop__toolbar__sort"
          onClick={() => {
            setSort(!sort);
          }}
        >
          сортировка
        </div>
      </div>
      <div className="shop__products">
        <ProductList />
      </div>
      {product.pageCount > 1 && <Pagination />}
    </div>
  );
});

export { Shop };
