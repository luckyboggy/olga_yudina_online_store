import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index.js";
import { ReactComponent as Add } from "../../img/svg/add.svg";
import { ReactComponent as Remove } from "../../img/svg/delete.svg";
import { ReactComponent as Accept } from "../../img/svg/accept.svg";
import { ReactComponent as Close } from "../../img/svg/close.svg";
import { CustomInput } from "../UI/input/CustomInput.jsx";
import { fetchTypes, deleteType, createType } from "../../http/productAPI.js";
import { observer } from "mobx-react-lite";

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
    <div className="admin__category">
      {!creation && (
        <div className="admin__category_add">
          <Add
            className="admin__category_addItem"
            onClick={() => setCreation(true)}
          />
        </div>
      )}

      {/* Новая категория */}
      {creation && (
        <form className="admin__category_new">
          <div className="admin__category_input">
            Новая категория
            <CustomInput
              placeholder={"категория"}
              value={newCategory}
              onChange={(event) => setNewCategory(event.target.value)}
            />
          </div>
          <div className="admin__category_btns">
            <Accept
              type="submit"
              className="acceptBtn"
              onClick={() => addType()}
            />
            <Close className="closeBtn" onClick={() => setCreation(false)} />
          </div>
        </form>
      )}

      <div className="admin__category_types">
        {product.types.map((type) => (
          <div key={type.name} className="admin__category_typeItem">
            {type.name}
            <Remove className="removeBtn" onClick={() => removeType(type)} />
          </div>
        ))}
      </div>
    </div>
  );
});

export { CategoryManagement };
