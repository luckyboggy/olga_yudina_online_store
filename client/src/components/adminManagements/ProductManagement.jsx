import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index.js";
import { ReactComponent as Add } from "../../img/svg/add.svg";
import { ReactComponent as Accept } from "../../img/svg/accept.svg";
import { ReactComponent as Close } from "../../img/svg/close.svg";
import { CustomInput } from "../UI/input/CustomInput.jsx";
import { CustomTextArea } from "../UI/textarea/CustomTextArea.jsx";
import CustomSelect from "../UI/select/CustomSelect.jsx";
import { observer } from "mobx-react-lite";
import { createProduct } from "../../http/productAPI.js";
import ProductList from "../ProductList.jsx";
import { fetchProducts } from "../../http/productAPI.js";

const ProductManagement = observer(() => {
  const { product } = useContext(Context);
  const [creation, setCreation] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: [],
    description: "",
    typeId: null,
  });

  const selectFile = (event) => {
    setNewProduct({ ...newProduct, img: [...event.target.files] });
  };

  const selectTypeId = (typeName) => {
    const id = product.types.find((type) => {
      return type.name === typeName;
    }).id;
    setNewProduct({ ...newProduct, typeId: id });
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("typeId", newProduct.typeId);
    formData.append("description", newProduct.description);
    formData.append("img", newProduct.img);

    createProduct(formData).then(() => {
      setNewProduct({
        name: "",
        price: "",
        img: [],
        description: "",
        typeId: null,
      });
    });
  };

  useEffect(() => {
    fetchProducts(null, product.limit, 1).then((data) => {
      product.setItems(data.rows);
    });
  }, []);

  return (
    <div className="admin__products">
      {!creation && (
        <div className="admin__products_add">
          <Add
            className="admin__products_addItem"
            onClick={() => setCreation(true)}
          />
        </div>
      )}

      {/* Новый товар */}
      {creation && (
        <form className="admin__products_new">
          Новый товар
          <div className="admin__products_input">
            <div>Назвение</div>
            <CustomInput
              placeholder="название"
              value={newProduct.name}
              onChange={(event) =>
                setNewProduct({ ...newProduct, name: event.target.value })
              }
            />
          </div>
          <div className="admin__products_input">
            <div>Цена</div>
            <CustomInput
              placeholder="цена"
              value={newProduct.price}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  price: Number(event.target.value),
                })
              }
            />
          </div>
          <div className="admin__products_input">
            <div>Категория</div>
            <CustomSelect options={product.types} onChange={selectTypeId} />
          </div>
          <input
            type="file"
            multiple
            accept="image/+"
            onChange={selectFile}
            className="admin__products_fileInput"
            id="fileInput"
          />
          <label for="fileInput">
            <div>новая фотка</div>
          </label>
          {newProduct.img && (
            <div className="selectedImages">
              {newProduct.img.map((image) => (
                <img
                  key={image.name}
                  src={URL.createObjectURL(image)}
                  className="selectedImages__items"
                />
              ))}
            </div>
          )}
          <CustomTextArea
            placeholder="описание"
            value={newProduct.description}
            onChange={(event) =>
              setNewProduct({
                ...newProduct,
                description: event.target.value,
              })
            }
          />
          <div className="admin__products_btns">
            <Accept
              type="submit"
              className="acceptBtn"
              onClick={() => {
                console.log(newProduct);
                addProduct();
              }}
            />
            <Close className="closeBtn" onClick={() => setCreation(false)} />
          </div>
        </form>
      )}

      {/* Фильтр/Сортировка */}
      <div></div>

      {/* Список товаров */}
      <div className="shop__products">
        <ProductList />
      </div>
    </div>
  );
});

export { ProductManagement };
