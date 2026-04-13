export const getTasks = async (projectId: string, filter: string) => {
  let url = `http://localhost:4000/tasks?project_id=${projectId}`;
  if (filter !== "all") url += `&status=${filter}`;

  const res = await fetch(url);
  return res.json();
};

export const createTask = async (task: any) => {
  const res = await fetch("http://localhost:4000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const updateTask = async (id: string, data: any) => {
  const res = await fetch(`http://localhost:4000/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTask = async (id: string) => {
  await fetch(`http://localhost:4000/tasks/${id}`, {
    method: "DELETE",
  });
};