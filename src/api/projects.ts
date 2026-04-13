export const getProjects = async () => {
  const res = await fetch("http://localhost:4000/projects");
  const data = await res.json();
  return data;
};