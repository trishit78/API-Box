/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import  { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRequestPlaygroundStore } from "../store/useRequestStore";
import {  Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import Modal from "@/components/modal";

const AddNameModal = ({
  isModalOpen,
  setIsModalOpen,
  tabId,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  tabId: string;
}) => {
  const { updateTab, tabs, markUnsaved } = useRequestPlaygroundStore();
  const tab = tabs.find((t) => t.id === tabId);

  const [name, setName] = useState(tab?.title || "");
  
 
  useEffect(() => {
    if (tab) setName(tab.title);
  }, [tabId,tab]);

  const handleSubmit = async () => {
    if (!name.trim()) return;
    try {
      updateTab(tabId, { title: name });
      markUnsaved(tabId, true); 
      toast.success("Request name updated");
      setIsModalOpen(false);
     
    } catch (err) {
      toast.error("Failed to update request name");
      console.error(err);
    }
  };

  return (
    <Modal
      title="Rename Request"
      description="Give your request a name"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText="Save"
      submitVariant="default"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-center gap-2">
          <Input
            className="w-full p-2 border rounded bg-zinc-900 text-white"
            placeholder="Request Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

           <Button 
          variant={"outline"} 
          size={"icon"} 
            onClick={handleSubmit}
         >
          <Sparkles className="h-5 w-5 text-indigo-500" />
        </Button>
        </div>
       
       
      </div>
    </Modal>
  );
};

export default AddNameModal;