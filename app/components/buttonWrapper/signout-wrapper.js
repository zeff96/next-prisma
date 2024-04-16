import { signOut } from "@/auth";

export const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
};
