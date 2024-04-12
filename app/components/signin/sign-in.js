import { signIn } from "@/auth";

export const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin</button>
    </form>
  );
};
