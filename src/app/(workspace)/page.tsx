
import { currentUser } from "@/modules/authentication/actions";
import { redirect } from "next/navigation";


export default async function Home() {
  const user = await currentUser()
  if(!user){
    return redirect('sign-in')
  }
  return (

<div></div>    
  );
}
