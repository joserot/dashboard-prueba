import styles from "./Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";

const { header, titleContainer, btnNotifications } = styles;

export default function Header() {
  return (
    <header className={header}>
      <div className={titleContainer}>
        <FontAwesomeIcon icon={faHome} />
        <span>Inicio</span>
      </div>
      <button className={btnNotifications}>
        <FontAwesomeIcon icon={faBell} />
      </button>
    </header>
  );
}
