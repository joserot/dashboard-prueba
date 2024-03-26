"use client";

import styles from "./MakeAnOrder.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import InputSelect from "../ui/InputSelect";

import { customersOptions, productsOptions } from "@/data/selectsOptions";

const {
  container,
  header,
  title,
  btnFilter,
  content,
  containerCount,
  countEl,
  btnsContainer,
  countItem,
  priceEl,
  btnSubmit,
} = styles;

export default function MakeAnOrder() {
  const [customer, setCustomer] = useState(customersOptions[0].value);
  const [product, setProduct] = useState(productsOptions[0].value);

  const [count, setCount] = useState(1);

  return (
    <div className={container}>
      <div className={header}>
        <span className={title}>Realizar pedido</span>
        <button className={btnFilter}>
          <FontAwesomeIcon icon={faArrowUpWideShort} />
        </button>
      </div>
      <form className={content}>
        <InputSelect
          options={customersOptions}
          placeholder="Cliente"
          name=""
          value={customer}
          setValue={setCustomer}
        />
        <InputSelect
          options={productsOptions}
          placeholder="Producto"
          name=""
          value={product}
          setValue={setProduct}
        />
        <div className={containerCount}>
          <div className={countEl}>
            <span>Cantidad</span>
            <div className={btnsContainer}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (count === 1) return;
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <span className={countItem}>{count}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={priceEl}>
            <span>15</span>
            <span>Bs</span>
          </div>
        </div>
        <button className={btnSubmit}>Realizar pedido</button>
      </form>
    </div>
  );
}
