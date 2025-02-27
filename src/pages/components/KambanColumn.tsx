import React from "react";
import { Button } from "react-bootstrap";
import { Plus } from "lucide-react";

const KanbanColumn = ({ title, count }: { title: string; count: number }) => (
  <div className="card">
    <div className="card-body">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm text-gray-500">{count}</span>
      </div>
      <Button variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" /> Add Task
      </Button>
    </div>
  </div>
);

export default KanbanColumn;
