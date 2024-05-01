import { GoHome } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

export const navItems = [
  {
    id: uuidv4(),
    name: "Posts",
    path: "/",
    icon: <GoHome />,
  },
  {
    id: uuidv4(),
    name: "Notifications",
    path: "/notifications",
    icon: <IoNotificationsCircleOutline />,
  },
];
