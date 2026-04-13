export const loginUser = async (email: string, password: string) => {
  const res = await fetch(
    `http://localhost:4000/users?email=${email}&password=${password}`
  );
  return res.json();
};

export const registerUser = async (data: any) => {
  const res = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};