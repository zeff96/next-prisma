import { getNotifications } from "@/lib/notifications";

export const Notifications = async ({ userId }) => {
  const notifications = await getNotifications(userId);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <ul className="border rounded-lg bg-white">
        {notifications.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};
