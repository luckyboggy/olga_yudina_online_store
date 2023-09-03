import React, { useContext, useState, useEffect } from "react";
import { Context } from "index.js";
import { ReactComponent as Add } from "shared/assets/img/svg/add.svg";
import { ReactComponent as Remove } from "shared/assets/img/svg/delete.svg";
import { ReactComponent as Accept } from "shared/assets/img/svg/accept.svg";
import { ReactComponent as Close } from "shared/assets/img/svg/close.svg";
import { CustomInput } from "shared/ui/input/CustomInput.jsx";
import { fetchTypes, deleteType, createType } from "http/productAPI.js";
import { observer } from "mobx-react-lite";
import cls from "./CategoryManagement.module.scss";

const CategoryManagement = observer(() => {
  const { product } = useContext(Context);
  const [creation, setCreation] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  // Добавление категории
  const addType = () => {
    createType({ name: newCategory })
      .then((data) => {
        setNewCategory("");
        setCreation(false);
      })
      .then(() => {
        fetchTypes().then((data1) => {
          product.setTypes(data1);
        });
      });
  };

  // Удаление категории
  const removeType = (type) => {
    deleteType(type.id).then(() => {
      fetchTypes().then((data1) => {
        product.setTypes(data1);
      });
    });
  };

  useEffect(() => {
    fetchTypes().then((data) => {
      product.setTypes(data);
    });
  }, []);

  return (
    <div className={cls.category}>
      {!creation && (
        <div className={cls.addCategory}>
          <Add
            className={cls.addCategoryItem}
            onClick={() => setCreation(true)}
          />
        </div>
      )}

      {/* Новая категория */}
      {creation && (
        <form className={cls.newCategory}>
          <div className={cls.input}>
            Новая категория
            <CustomInput
              placeholder={"категория"}
              value={newCategory}
              onChange={(event) => setNewCategory(event.target.value)}
            />
          </div>
          <div className={cls.btns}>
            <Accept
              type="submit"
              className={cls.acceptBtn}
              onClick={() => addType()}
            />
            <Close
              className={cls.closeBtn}
              onClick={() => setCreation(false)}
            />
          </div>
        </form>
      )}

      <div className={cls.categoryLIst}>
        {product.types.map((type) => (
          <div key={type.name} className={cls.categoryItem}>
            {type.name}
            <Remove
              className={cls.removeBtn}
              onClick={() => removeType(type)}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export { CategoryManagement };
