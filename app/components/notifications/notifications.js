import { getNotifications } from "@/lib/notifications";
import { compareDesc } from "date-fns";

export const Notifications = async ({ userId }) => {
  const notifications = await getNotifications(userId);

  const orderedNotifications = notifications.sort((a, b) =>
    compareDesc(new Date(a.dateCreated), new Date(b.dateCreated))
  );

  const listNotifications = orderedNotifications.map((notification) => {
    if (notification.type === "like") {
      return (
        <div key={notification.id} className="notification">
          <img
            src={notification.post.user.image}
            alt={notification.post.user.name}
          />
          <p>
            {notification.post.user.name} liked a post:{" "}
            {notification.post.body.length > 100
              ? `${notification.post.body.slice(0, 100)}...`
              : notification.post.body}
          </p>
        </div>
      );
    } else if (notification.type === "comment") {
      return (
        <div key={notification.id} className="notification">
          <img
            src={notification.post.user.image}
            alt={notification.post.user.name}
          />
          <p>
            {notification.post.user.name} commented on a post:{" "}
            {notification.post.body.length > 100
              ? `${notification.post.body.slice(0, 100)}...`
              : notification.post.body}
          </p>
        </div>
      );
    } else if (notification.type === "post") {
      return (
        <div key={notification.id} className="notification">
          <img
            src={notification.post.user.image}
            alt={notification.post.user.name}
          />
          <p>
            {notification.post.user.name} posted:{" "}
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
      <div className="items-start">{listNotifications}</div>
    </div>
  );
};
