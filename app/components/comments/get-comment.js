import { TimeAgo } from "../timeAgo/TimeAgo";

export const Comment = ({ comment }) => {
  return (
    <div className="flex items-start space-x-2">
      <img
        src={comment.user.image}
        alt="avatar"
        className="w-8 h-8 rounded-full"
      />
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
