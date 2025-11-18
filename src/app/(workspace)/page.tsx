'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import TabbedSidebar from "@/modules/collections/components/TabbedSidebar";
import { useWorkspaceStore } from "@/modules/layout/store";
import RequestPlayground from "@/modules/request/components/RequestPlayground";
import { useGetWorkspace } from "@/modules/workspace/hooks/workspace";
import { Loader } from "lucide-react";


const Page = ()=>{
  const {selectedWorkspace} = useWorkspaceStore();


  const workspaceId = selectedWorkspace?.id;
  

  const {data:currentWorkspace,isPending} = useGetWorkspace(workspaceId);
  
  if(isPending || !workspaceId){
    return (
      <div className="flex flex-col items-center justify-center h-full ">
        <Loader className="animate-spin h-6 w-6 text-indigo-500"/>
      </div>
    )
  }

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={65} minSize={40}>
        <RequestPlayground></RequestPlayground>
      </ResizablePanel>
      <ResizableHandle withHandle/>
      <ResizablePanel defaultSize={35} maxSize={35} className="flex">
        <div className="flex-1">
          <TabbedSidebar currentWorkspace={currentWorkspace!}/>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )

}

export default Page;