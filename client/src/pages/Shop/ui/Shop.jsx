import React, { useState, useContext, useEffect } from "react";
import { ProductList } from "widgets/ProductList/ui/ProductList/ProductList.jsx";
import { ChooseSortType } from "entities/ChooseSortType.jsx";
import { Context } from "index.js";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchProducts } from "http/productAPI.js";
import { Pagination } from "shared/ui/search/pagination/Pagination.jsx";
import CurrentModal from "shared/ui/modal/CurrentModal";
import cls from "./Shop.module.scss";

const Shop = observer(() => {
  const [sort, setSort] = useState(false);
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchProducts(null, product.limit, 1, product.sortType.value).then(
      (data) => {
        product.setItems(data.rows);
        product.setTotalCount(data.count);
        product.setPageCount();
      }
    );
  }, []);

  useEffect(() => {
    fetchProducts(
      product.selectedType.id,
      product.limit,
      product.page,
      product.sortType.value
    ).then((data) => {
      product.setItems(data.rows);
      product.setTotalCount(data.count);
      product.setPageCount();
    });
  }, [product.page, product.selectedType, product.sortType.value]);

  return (
    <div className={cls.shop}>
      {sort && (
        <CurrentModal close={setSort}>
          <ChooseSortType closeModal={setSort} />
        </CurrentModal>
      )}

      <div className={cls.toolbar}>
        <div className={cls.selected}>
          {product.selectedType.name /* .toLowerCase() */}
        </div>
        <div
          className={cls.sort}
          onClick={() => {
            setSort(!sort);
          }}
        >
          {product.sortType.name.toLowerCase()}
        </div>
      </div>
      <div className={cls.products}>
        <ProductList />
      </div>
      {product.pageCount > 1 && <Pagination />}
    </div>
  );
});

export { Shop };
