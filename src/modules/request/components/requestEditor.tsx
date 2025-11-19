"use client";

import { Input } from "@/components/ui/input";
import { useRequestPlaygroundStore } from "../store/useRequestStore";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import RequestEditorArea from "./requestEditorArea";


export default function RequestEditor() {
  const { tabs, activeTabId, updateTab} = useRequestPlaygroundStore();
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

 const requestColorMap: Record<string, string> = {
    GET: "text-green-500",
    POST: "text-blue-500",
    PUT: "text-yellow-500",
    DELETE: "text-red-500",
  };

 
  if (!activeTab) return null;

  return (
   <div className="flex flex-col items-center justify-start py-4 px-4">
  <div className='flex flex-row items-center justify-between bg-zinc-900 rounded-md px-2 py-2 w-full'>
      <div className="flex flex-row items-center gap-2 flex-1">
        <Select 
          value={activeTab.method} 
          onValueChange={(value) => updateTab(activeTab.id, { method: value })}
        >
          <SelectTrigger className={`w-24 ${requestColorMap[activeTab.method] || "text-gray-500"}`}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="GET" className="text-green-500">GET</SelectItem>
              <SelectItem value="POST" className="text-blue-500">POST</SelectItem>
              <SelectItem value="PUT" className="text-yellow-500">PUT</SelectItem>
              <SelectItem value="DELETE" className="text-red-500">DELETE</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        
        <Input 
          value={activeTab.url || ''} 
          onChange={(e) => updateTab(activeTab.id, { url: e.target.value })}
          placeholder="Enter URL"
          className="flex-1 text-white"
        />
      </div>
      
      <Button 
      type='submit'
        className="ml-2 text-white  font-bold bg-indigo-500 hover:bg-indigo-600"
      >
        <Send className="mr-2" />
        Send
      </Button>
    </div>

     <div className="flex flex-1 flex-col w-full justify-start mt-4 items-center ">
        <RequestEditorArea tab={activeTab} updateTab={updateTab} ></RequestEditorArea>

     </div>
      
   </div>
  );
}