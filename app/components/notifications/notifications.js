import { getNotifications } from "@/lib/notifications";
import { compareDesc } from "date-fns";

export const Notifications = async ({ userId }) => {
  const notifications = await getNotifications(userId);

  const orderedNotifications = notifications.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );

  const listNotifications = orderedNotifications.map((notification) => {
    console.log(notification?.post);
    if (notification.type === "like") {
      return (
        <div key={notification.id} className="notification">
          <img src={notification.user.image} alt={notification.user.name} />
          <p>{notification.user.name} liked your post</p>
        </div>
      );
    } else if (notification.type === "comment") {
      return (
        <div key={notification.id} className="notification">
          <img src={notification.user.image} alt={notification.user.name} />
          <p>{notification.user.name} commented on your post</p>
        </div>
      );
    } else if (notification.type === "post") {
      return (
        <div key={notification.id} className="notification">
          <img src={notification.user.image} alt={notification.user.name} />
          <p>
            {notification.user.name} posted: {notification?.post?.body}
          </p>
        </div>
      );
    }
  });

  return <div>{listNotifications}</div>;
};
