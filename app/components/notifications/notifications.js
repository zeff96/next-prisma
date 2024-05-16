import { getNotifications } from "@/lib/notifications";
import { compareDesc } from "date-fns";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { NotificationButtonWrapper } from "../buttonWrapper/notification-button-wrapper";
import { NotificationItem } from "./notification-item";

export const Notifications = async ({ userId }) => {
  const notifications = await getNotifications(userId);

  const orderedNotifications = notifications.sort((a, b) =>
    compareDesc(new Date(a.dateCreated), new Date(b.dateCreated))
  );

  const listNotifications = orderedNotifications.map((notification) => (
    <NotificationButtonWrapper
      id={notification.id}
      postId={notification.postId}
      key={notification.id}
    >
      <li
        className={`flex gap-x-2 items-center ${
          notification.read ? "" : "bg-teal-500"
        } p-3 rounded-b-2xl`}
      >
        {notification.post.user.image ? (
          <Image
            src={notification.post.user.image}
            alt={notification.post.user.name}
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
        ) : (
          <FaUserCircle className="w-[100px] h-[100px]" />
        )}
        <NotificationItem notification={notification} />
      </li>
    </NotificationButtonWrapper>
  ));

  return (
    <div className="w-full h-screen flex flex-col items-center py-3">
      <ul className="w-1/3 items-start">{listNotifications}</ul>
    </div>
  );
};
