import { AiFillPieChart, AiOutlineUser } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { FaCity, FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { TbScooter } from "react-icons/tb";
import { ReactComponent as Scooter } from "../assets/icons/Scooter.svg";
import { ReactComponent as Users } from "../assets/icons/Users.svg";
import { ReactComponent as Areas } from "../assets/icons/Areas.svg";

export const links = [
  {
    title: "dashboard",
    icon: <AiFillPieChart />,
  },
  {
    title: "map",
    icon: <BsFillPinMapFill />,
  },
  {
    title: "cities",
    icon: <FaCity />,
  },
  {
    title: "scooters",
    icon: <TbScooter />,
  },
  {
    title: "customers",
    icon: <FaUserFriends />,
  },
  {
    title: "Settings",
    icon: <FiSettings />,
  },
];

export const dashboard = [
  {
    title: "Scooters",
    icon: <Scooter />,
    color: "#5f78ff",
    sub: [
      {
        title: "Total Scooters",
        icon: "",
        dataName: "totalScooters",
      },
      {
        title: "Total Live Scooters",
        icon: "",
        dataName: "liveScooters",
      },
      {
        title: "Total Scooters Charging",
        icon: "",
        dataName: "chargingScooters",
      },
      {
        title: "Total Scooters Maintence",
        icon: "",
        dataName: "maintenceScooters",
      },
    ],
  },
  {
    title: "Users",
    icon: <AiOutlineUser />,
    color: "#ff731d",
    sub: [
      {
        title: "Total Users",
        icon: "",
      },
      {
        title: "Active Users",
        icon: "",
      },
    ],
  },
  {
    title: "Cities",
    icon: <Areas />,
    color: "#de42bc",
    sub: [
      {
        title: "Total Areas",
        icon: "",
      },
      {
        title: "Active Parking Zones",
        icon: "",
      },
      {
        title: "Total Green Zones",
        icon: "",
      },
      {
        title: "Total Red Zones",
        icon: "",
      },
    ],
  },
];
