import prisma from "@/lib/prisma/prisma";
import { revalidatePath } from "next/cache";

export const POST = async (req) => {
  const { id } = await req.json();
  try {
    const notification = await prisma.notification.update({
      where: { id: id },
      data: { read: true },
    });

    return Response.json({ notification });
  } catch (error) {
    console.log("Something went wrong " + error.message);
  }
};
