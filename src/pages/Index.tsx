
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectForm from "@/components/ProjectForm";

const Index = () => {
  const navigate = useNavigate();
  const [showProjectForm, setShowProjectForm] = useState(false);

  const handleProjectSubmit = async (data: any) => {
    console.log("Project data:", data);
    // TODO: Implement project creation logic
    setShowProjectForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Management Tool
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Streamline your project planning, execution, and monitoring
          </p>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Register
            </button>
          </div>
        </motion.div>

        {/* Project Form Dialog */}
        {showProjectForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
              <ProjectForm onSubmit={handleProjectSubmit} />
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-soft"
          >
            <h3 className="text-xl font-semibold mb-4">Project Planning</h3>
            <p className="text-gray-600">
              Create and manage projects with ease. Set priorities, deadlines, and track progress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-soft"
          >
            <h3 className="text-xl font-semibold mb-4">Team Collaboration</h3>
            <p className="text-gray-600">
              Work together seamlessly. Share updates, files, and communicate in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-soft"
          >
            <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor project status, deadlines, and team performance with intuitive dashboards.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
