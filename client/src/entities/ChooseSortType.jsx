import React, { useContext } from "react";
import { Context } from "../index.js";

const ChooseSortType = ({ closeModal }) => {
  const sortTypes = [
    { name: "Новинки", value: ["updatedAt", "DESC"] },
    { name: "Дешевле", value: ["price", "ASC"] },
    { name: "Дороже", value: ["price", "DESC"] },
  ];

  const { product } = useContext(Context);

  return (
    <div className="sortTypes">
      {sortTypes.map((sortType) => (
        <div key={sortType.name}>
          <label>
            <input
              type="checkbox"
              checked={product.sortType.name === sortType.name}
              onClick={() => {
                product.setSortType(sortType);
                closeModal(false);
              }}
            />
            {sortType.name}
          </label>
        </div>

        /*         <div
          className="sortType"
          key={sortType.name}
          onClick={() => {
            product.setSortType(sortType);
            closeModal(false);
          }}
        >
          {sortType.name}
        </div> */
      ))}
    </div>
  );
};

export { ChooseSortType };
