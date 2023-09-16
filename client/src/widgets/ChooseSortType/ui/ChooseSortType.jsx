import React, { useContext } from "react";
import { Context } from "index.js";
import { CheckBox } from "shared/ui/checkbox/CheckBox";
import cls from "./ChooseSortType.module.scss";

const ChooseSortType = ({ closeModal }) => {
  const sortTypes = [
    { name: "Новинки", value: ["updatedAt", "DESC"] },
    { name: "Дешевле", value: ["price", "ASC"] },
    { name: "Дороже", value: ["price", "DESC"] },
  ];

  const { product } = useContext(Context);

  return (
    <div className={cls.sortTypes}>
      {sortTypes.map((sortType) => (
        <CheckBox
          key={sortType.name}
          type={"radio"}
          checked={product.sortType.name === sortType.name}
          onChange={() => {
            product.setSortType(sortType);
            closeModal(false);
          }}
        >
          {sortType.name}
        </CheckBox>
      ))}
    </div>
  );
};

export { ChooseSortType };
