import { getNotifications } from "@/lib/notifications";

export const Notifications = async ({ userId }) => {
  const notifications = await getNotifications(userId);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <ul className="border rounded-lg">
        {notifications.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};
