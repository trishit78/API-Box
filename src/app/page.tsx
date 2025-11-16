
import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
import { redirect } from "next/navigation";


export default async function Home() {
  const user = await currentUser()
  if(!user){
    return redirect('sign-in')
  }
  return (

    <div className="flex h-screen flex-col items-center justify-center bg-red-400">
      <UserButton user = {user}/>
    </div>
  );
}
