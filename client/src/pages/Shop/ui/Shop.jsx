import React, { useState, useContext, useEffect } from "react";
import { ProductList } from "widgets/ProductList/ui/ProductList/ProductList.jsx";
import { Filters } from "widgets/Filters/ui/Filters.jsx";
import { ReactComponent as Sort } from "shared/assets/img/svg/sort.svg";
import { Context } from "index.js";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchProducts } from "http/productAPI.js";
import { Pagination } from "shared/ui/search/pagination/Pagination.jsx";
import { Modal } from "shared/ui/modal/Modal";
import cls from "./Shop.module.scss";

const Shop = observer(() => {
  const [sort, setSort] = useState(false);
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchProducts(null, null, product.limit, 1, product.sortType.value).then(
      (data) => {
        product.setItems(data.rows);
        product.setTotalCount(data.count);
        product.setPageCount();
      }
    );
  }, []);

  useEffect(() => {
    fetchProducts(
      product.selectedType,
      null,
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
        <Modal type={"lower"} title={"Фильтры"} close={setSort}>
          <Filters closeModal={setSort} />
        </Modal>
      )}

      <div className={cls.toolbar}>
        <div className={cls.selected}>
          {product.selectedType.map((item) => (
            <div key={item} className={cls.selectedType}>
              {`${
                product.types.find((type) => {
                  return type.id === item;
                }).name
              }`}
            </div>
          ))}
          {product.selectedType.name /* .toLowerCase() */}
        </div>
        <div
          className={cls.filter}
          onClick={() => {
            setSort(!sort);
          }}
        >
          <div className={cls.filterTitle}>
            <div className={cls.filterName}>Фильтры</div>
            <Sort className={cls.filterIcon} />
          </div>
        </div>
      </div>
      <ProductList />
      {product.pageCount > 1 && <Pagination />}
    </div>
  );
});

export { Shop };
