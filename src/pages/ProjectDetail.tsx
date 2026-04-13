import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getTasks, createTask, deleteTask } from "../api/tasks";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await getTasks(id!, filter);
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const addTask = async () => {
    if (!title) return;
    await createTask({
      title,
      status: "todo",
      priority: "medium",
      project_id: Number(id),
    });
    setTitle("");
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 max-w-3xl mx-auto">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Tasks</h2>

          <select
            className="border p-2 rounded"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 p-2 border rounded"
            placeholder="New task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-3">
            {tasks.map((t) => (
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-semibold">{t.title}</h3>

                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">
                    {t.status}
                  </span>

                  <button
                    onClick={() => deleteTask(t.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;