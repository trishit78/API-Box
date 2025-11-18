import Header from "@/modules/layout/components/header";
import { initializeWorkspace } from "@/modules/workspace/actions";

const RootLayout = async({children}:{children:React.ReactNode}) => {
    
  const workspace = await initializeWorkspace();
  console.log('user is layout',JSON.stringify(workspace));

  return (
    <>
    
    <Header  />
    <main className='max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden'>
        <div className="flex h-full w-full">
          
          <div className="flex-1 bg-zinc-950">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default RootLayout;
