export const NotificationItem = ({ notification }) => {
  switch (notification.type) {
    case "like":
      return (
        <p>
          <span className="font-bold">{notification.post.user.name}</span> liked
          a post:{" "}
          {notification.post.body.length > 100
            ? `${notification.post.body.slice(0, 100)}...`
            : notification.post.body}
        </p>
      );
    case "comment":
      return (
        <p>
          <span className="font-bold">{notification.post.user.name}</span>{" "}
          commented on a post:{" "}
          {notification.post.body.length > 100
            ? `${notification.post.body.slice(0, 100)}...`
            : notification.post.body}
        </p>
      );
    case "post":
      return (
        <p>
          <span className="font-bold">{notification.post.user.name}</span>{" "}
          posted:{" "}
          {notification.post.body.length > 100
            ? `${notification.post.body.slice(0, 100)}...`
            : notification.post.body}
        </p>
      );
  }
};
