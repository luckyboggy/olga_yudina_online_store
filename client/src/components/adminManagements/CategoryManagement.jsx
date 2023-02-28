import React, { useContext, useState } from "react";
import { Context } from "../../index.js";
import { ReactComponent as Add } from "../../img/svg/add.svg";
import { ReactComponent as Remove } from "../../img/svg/delete.svg";
import { ReactComponent as Accept } from "../../img/svg/accept.svg";
import { ReactComponent as Close } from "../../img/svg/close.svg";
import { CustomInput } from "../UI/input/CustomInput.jsx";

const CategoryManagement = () => {
  const { product } = useContext(Context);
  const [newCategory, setNewCategory] = useState(false);

  return (
    <div className="admin__category">
      {!newCategory && (
        <div className="admin__category_add">
          <Add
            className="admin__category_addItem"
            onClick={() => setNewCategory(true)}
          />
        </div>
      )}

      {/* Новая категория */}
      {newCategory && (
        <form className="admin__category_new">
          <div className="admin__category_input">
            Новая категория
            <CustomInput placeholder={"категория"} />
          </div>
          <div className="admin__category_btns">
            <Accept type="submit" className="acceptBtn" />
            <Close className="closeBtn" onClick={() => setNewCategory(false)} />
          </div>
        </form>
      )}

      <div className="admin__category_types">
        {product.types.map((type) => (
          <div key={type.name} className="admin__category_typeItem">
            {type.name}
            <Remove className="removeBtn" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { CategoryManagement };
