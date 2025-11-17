import { currentUser } from "@/modules/authentication/actions";

export async function GET() {
  const user = await currentUser();
  return Response.json(user);
}
