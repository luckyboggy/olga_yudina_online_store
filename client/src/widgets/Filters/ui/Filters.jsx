import React, { useContext } from "react";
import { Context } from "index.js";
import { CheckBox } from "shared/ui/checkbox/CheckBox";
import cls from "./Filters.module.scss";
import { CustomButton } from "shared/ui/button/CustomButton";

const Filters = ({ closeModal }) => {
  const sortTypes = [
    { name: "Новинки", value: ["updatedAt", "DESC"] },
    { name: "Дешевле", value: ["price", "ASC"] },
    { name: "Дороже", value: ["price", "DESC"] },
  ];

  const { product } = useContext(Context);

  return (
    <div className={cls.filters}>
      <div className={cls.sort}>
        <div className={cls.sortTitle}>Сортировка</div>
        <div className={cls.sortTypes}>
          {sortTypes.map((sortType) => (
            <CheckBox
              key={sortType.name}
              type={"radio"}
              checked={product.sortType.name === sortType.name}
              onChange={() => {
                product.setSortType(sortType);
              }}
            >
              {sortType.name}
            </CheckBox>
          ))}
        </div>
      </div>
      <hr />
      <div className={cls.types}></div>
      <div className={cls.accceptBtn}>
        <CustomButton fontSize={"m"}>Применить</CustomButton>
      </div>
    </div>
  );
};

export { Filters };
