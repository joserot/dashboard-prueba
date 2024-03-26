import styles from "./SideNav.module.css";

import Link from "next/link";
import Image from "next/image";

import { links } from "@/data/links";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const { container, logo, logoContainer, linkEl, notificationEl, btn } = styles;

export default function SideNav() {
  return (
    <aside className={container}>
      <Link className={logoContainer} href={"/"}>
        <Image
          className={logo}
          src={"/logo.svg"}
          width={58}
          height={29}
          alt="Logo SmartWater"
        />
      </Link>
      {links.map((link) => {
        return (
          <Link className={linkEl} key={link.label} href={link.href}>
            <FontAwesomeIcon icon={link.icon} /> {link.label}{" "}
            {link.notifications > 0 && (
              <span className={notificationEl}>{link.notifications}</span>
            )}
          </Link>
        );
      })}
      <button className={btn}>
        <FontAwesomeIcon icon={faRightFromBracket} /> Salir
      </button>
    </aside>
  );
}
