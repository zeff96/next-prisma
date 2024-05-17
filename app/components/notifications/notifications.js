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

  const listNotifications = orderedNotifications.map((notification, index) => (
    <NotificationButtonWrapper
      id={notification.id}
      postId={notification.postId}
      key={notification.id}
    >
      <li
        className={`flex gap-x-3 items-center p-3 border-l border-r border-gray-700 ${
          notification.read ? "" : "bg-blue-300"
        } ${index === 0 ? "rounded-t-2xl border-t" : ""} ${
          index === orderedNotifications.length - 1
            ? "rounded-b-2xl border-b"
            : ""
        }`}
      >
        <div>
          {notification.post.user.image ? (
            <Image
              src={notification.post.user.image}
              alt={notification.post.user.name}
              width={70}
              height={70}
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <FaUserCircle className="w-[40px] h-[40px]" />
          )}
        </div>
        <div>
          <NotificationItem notification={notification} />
        </div>
      </li>
    </NotificationButtonWrapper>
  ));

  return (
    <div className="w-full h-screen flex flex-col items-center py-3">
      <ul className="w-2/5 items-start list-none">{listNotifications}</ul>
    </div>
  );
};
