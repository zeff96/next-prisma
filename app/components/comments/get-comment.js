import { TimeAgo } from "../timeAgo/TimeAgo";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export const Comment = ({ comment }) => {
  return (
    <div className="flex items-start space-x-2">
      {comment.user.image ? (
        <Image
          src={comment.user.image}
          alt={comment.user.name}
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <FaUserCircle className="text-3xl" />
      )}
      <div>
        <div className="bg-zinc-500 flex flex-col rounded-2xl py-2 px-4">
          <h4 className="font-semibold text-gray-100">{comment.user.name}</h4>
          <p className="text-sm text-gray-100">{comment.body}</p>
        </div>
        <TimeAgo timestamp={comment.createdAt} />
      </div>
    </div>
  );
};
