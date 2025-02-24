
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

type FormData = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "Not Started" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
};

const ProjectForm = ({ onSubmit: onSubmitProp }: { onSubmit: (data: FormData) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await onSubmitProp(data);
      toast({
        title: "Success",
        description: "Project created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create project",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 bg-white rounded-xl shadow-soft"
    >
      <h2 className="text-xl font-semibold mb-6">Create New Project</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter project title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={4}
            placeholder="Enter project description"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              {...register("startDate", { required: "Start date is required" })}
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              {...register("endDate", { required: "End date is required" })}
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.endDate && (
              <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              {...register("status", { required: "Status is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              {...register("priority", { required: "Priority is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.priority && (
              <p className="mt-1 text-sm text-red-600">{errors.priority.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isLoading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </motion.div>
  );
};

export default ProjectForm;
