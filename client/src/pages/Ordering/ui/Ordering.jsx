import React, { useState, useContext } from "react";
import { Context } from "index.js";
import { CustomButton } from "shared/ui/button/CustomButton.jsx";
import { CustomInput } from "shared/ui/input/CustomInput.jsx";
import {
  fetchCity,
  fetchStreet,
} from "shared/lib/functions/autocompleteFunctions.js";
import cls from "./Ordering.module.scss";

const Ordering = () => {
  const { user } = useContext(Context);
  const [customerData, SetCustomerData] = useState({
    email: "",
    name: "",
    surename: "",
  });

  const [customerAddress, setCustomerAddress] = useState({
    city: "",
    street: "",
    house: "",
    flat: "",
    zipCode: 0,
  });

  const [suggestionCity, setSuggestionCity] = useState([]);
  const [suggestionStreet, setSuggestionStreet] = useState([]);

  return (
    <div className={cls.ordering}>
      <div className={cls.personal}>
        <CustomInput
          type="email"
          placeholder="email"
          value={customerData.email}
          onChange={(event) => {
            SetCustomerData({ ...customerData, email: event.target.value });
          }}
        />
        <CustomInput
          type="text"
          placeholder="Name"
          value={customerData.name}
          onChange={(event) => {
            SetCustomerData({ ...customerData, name: event.target.value });
          }}
        />
        <CustomInput
          type="text"
          placeholder="Surename"
          value={customerData.surename}
          onChange={(event) => {
            SetCustomerData({ ...customerData, surename: event.target.value });
          }}
        />
      </div>
      <div className={cls.delivery}>
        <div className="fs20">Доставка</div>

        {/* выбор города */}
        <CustomInput
          type="text"
          placeholder="city"
          list="deliveryCity"
          value={customerAddress.city}
          onChange={(event) => {
            setCustomerAddress({
              ...customerAddress,
              city: event.target.value,
            });
            fetchCity(event.target.value).then((data) =>
              setSuggestionCity(data)
            );
            setCustomerAddress({
              ...customerAddress,
              street: "",
              house: "",
              flat: "",
            });
          }}
        />
        <datalist id="deliveryCity">
          {suggestionCity.map((city) => (
            <option value={city.data.city} key={city.data.city}></option>
          ))}
        </datalist>

        {/* выбор улицы */}
        <CustomInput
          type="text"
          placeholder="street"
          list="deliveryStreet"
          value={customerAddress.street}
          onChange={(event) => {
            setCustomerAddress({
              ...customerAddress,
              street: event.target.value,
            });
            fetchStreet(
              event.target.value,
              suggestionCity[0].data.city_fias_id
            ).then((data) => setSuggestionStreet(data));
          }}
        />
        <datalist id="deliveryStreet">
          {suggestionStreet.map((street) => (
            <option
              value={`${street.data.street_type}. ${street.data.street}`}
              key={street.data.street}
            ></option>
          ))}
        </datalist>
        <div className={cls.houseFlat}>
          <CustomInput
            type="text"
            placeholder="house"
            value={customerAddress.house}
            onChange={(event) => {
              setCustomerAddress({
                ...customerAddress,
                house: event.target.value,
              });
            }}
          />
          <CustomInput
            type="text"
            placeholder="flat"
            value={customerAddress.flat}
            onChange={(event) => {
              setCustomerAddress({
                ...customerAddress,
                flat: event.target.value,
              });
            }}
          />
        </div>
      </div>
      <CustomButton
        onClick={(event) => {
          event.preventDefault();
          // console.log(customerData);
          // console.log(customerAddress);
          // console.log(suggestionCity);
          // console.log(suggestionStreet);
        }}
      >
        Оформить
      </CustomButton>
    </div>
  );
};

export { Ordering };
