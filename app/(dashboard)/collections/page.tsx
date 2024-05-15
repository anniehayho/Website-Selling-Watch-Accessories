"use client";

import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom_ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Collections = () => {
  const [loading, setLoanging] = useState(true);
  const [collections, setCollections] = useState([]);
  const getCollection = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
      setCollections(data);
      setLoanging(false);
      } catch (err) {
      console.log("[collections_GET]", err)
    }
  }
  useEffect(() => {
    getCollection();
  }, []);
  
  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p>
        <Button className="bg-blue-1 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={collections} searchKey = "title"/>
    </div>
  )
}

export default Collections