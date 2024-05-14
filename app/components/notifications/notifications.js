import { getNotifications } from "@/lib/notifications";
import { compareDesc } from "date-fns";
import Image from "next/image";

export const Notifications = async ({ userId }) => {
  const notifications = await getNotifications(userId);

  const orderedNotifications = notifications.sort((a, b) =>
    compareDesc(new Date(a.dateCreated), new Date(b.dateCreated))
  );

  const listNotifications = orderedNotifications.map((notification) => {
    if (notification.type === "like") {
      return (
        <div key={notification.id} className="flex gap-x-2 items-center">
          <Image
            src={notification.post.user.image}
            alt={notification.post.user.name}
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <p>
            <span className="font-bold">{notification.post.user.name}</span>{" "}
            liked a post:{" "}
            {notification.post.body.length > 100
              ? `${notification.post.body.slice(0, 100)}...`
              : notification.post.body}
          </p>
        </div>
      );
    } else if (notification.type === "comment") {
      return (
        <div key={notification.id} className="flex gap-x-2 items-center">
          <Image
            src={notification.post.user.image}
            alt={notification.post.user.name}
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <p>
            <span className="font-bold">{notification.post.user.name}</span>{" "}
            commented on a post:{" "}
            {notification.post.body.length > 100
              ? `${notification.post.body.slice(0, 100)}...`
              : notification.post.body}
          </p>
        </div>
      );
    } else if (notification.type === "post") {
      return (
        <div key={notification.id} className="flex gap-x-2 items-center">
          <Image
            src={notification.post.user.image}
            alt={notification.post.user.name}
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <p>
            <span className="font-bold">{notification.post.user.name}</span>{" "}
            posted:{" "}
            {notification.post.body.length > 100
              ? `${notification.post.body.slice(0, 100)}...`
              : notification.post.body}
          </p>
        </div>
      );
    }
  });

  return (
    <div className="w-full h-screen flex flex-col items-center py-3">
      <div className="w-1/3 items-start">{listNotifications}</div>
    </div>
  );
};
