import {
  faHome,
  faUsers,
  faLocationDot,
  faTruck,
  faCashRegister,
  faMoneyCheckDollar,
  faChartPie,
  faGear,
  faChartSimple,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    label: "Inicio",
    href: "/",
    icon: faHome,
    notifications: 0,
  },
  {
    label: "Clientes",
    href: "/",
    icon: faUsers,
    notifications: 0,
  },
  {
    label: "Mapa de clientes",
    href: "/",
    icon: faLocationDot,
    notifications: 0,
  },
  {
    label: "Monitoreo de Distribuidores",
    href: "/",
    icon: faTruck,
    notifications: 0,
  },
  {
    label: "Ventas",
    href: "/",
    icon: faCashRegister,
    notifications: 0,
  },
  {
    label: "Pedidos",
    href: "/",
    icon: faMoneyCheckDollar,
    notifications: 1,
  },
  {
    label: "Prestamos",
    href: "/",
    icon: faSheetPlastic,
    notifications: 0,
  },
  {
    label: "Finanzas",
    href: "/",
    icon: faChartSimple,
    notifications: 0,
  },
  {
    label: "Reportes",
    href: "/",
    icon: faChartPie,
    notifications: 0,
  },
  {
    label: "Configuración",
    href: "/",
    icon: faGear,
    notifications: 0,
  },
];
