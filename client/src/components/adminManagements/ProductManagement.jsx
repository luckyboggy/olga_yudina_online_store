import React, { useContext, useState } from "react";
import { Context } from "../../index.js";
import { ReactComponent as Add } from "../../img/svg/add.svg";
import { ReactComponent as Accept } from "../../img/svg/accept.svg";
import { ReactComponent as Close } from "../../img/svg/close.svg";
import { CustomInput } from "../UI/input/CustomInput.jsx";
import CustomSelect from "../UI/select/CustomSelect.jsx";

const ProductManagement = () => {
  const { product } = useContext(Context);
  const [newProduct, setNewProduct] = useState(false);

  return (
    <div className="admin__products">
      {!newProduct && (
        <div className="admin__products_add">
          <Add
            className="admin__products_addItem"
            onClick={() => setNewProduct(true)}
          />
        </div>
      )}

      {/* Новый товар */}
      {newProduct && (
        <form className="admin__products_new">
          Новый товар
          <div className="admin__products_input">
            <div>Назвение</div>
            <CustomInput />
          </div>
          <div className="admin__products_input">
            <div>Цена</div>
            <CustomInput />
          </div>
          <div className="admin__products_input">
            <div>Категория</div>
            <CustomSelect options={product.types} onChange={() => {}} />
          </div>
          <CustomInput type="file" />
          <div className="admin__products_btns">
            <Accept type="submit" className="acceptBtn" />
            <Close className="closeBtn" onClick={() => setNewProduct(false)} />
          </div>
        </form>
      )}
    </div>
  );
};

export { ProductManagement };
