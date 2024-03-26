import styles from "./Customers.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpWideShort,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";

import { customers } from "@/data/customers";

import Image from "next/image";

const {
  container,
  header,
  title,
  subTitle,
  btnFilter,
  headerText,
  content,
  customerEl,
  img,
  name,
  date,
  amount,
} = styles;

export default function Customers() {
  return (
    <div className={container}>
      <div className={header}>
        <div className={headerText}>
          <span className={title}>Clientes</span>
          <span className={subTitle}>Vista rapida</span>
        </div>
        <button className={btnFilter}>
          <FontAwesomeIcon icon={faArrowUpWideShort} />
        </button>
      </div>
      <div className={content}>
        {customers.map((customer) => {
          return (
            <div className={customerEl} key={customer.name}>
              <Image
                className={img}
                src={customer.photo}
                width={30}
                height={30}
                alt={"Foto de perfil de " + customer.name}
              />
              <span className={name}>{customer.name}</span>
              <span className={date}>{customer.date}</span>
              <span className={amount}>
                <FontAwesomeIcon icon={faMoneyCheckDollar} />{" "}
                {customer.amount + " Bs."}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
