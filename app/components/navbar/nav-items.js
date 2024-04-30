import { GoHome } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { SiBloglovin } from "react-icons/si";

export const navItems = [
  {
    icon: <SiBloglovin />,
    path: "/",
  },
  {
    name: "Posts",
    path: "/",
    icon: <GoHome />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <IoNotificationsCircleOutline />,
  },
];
