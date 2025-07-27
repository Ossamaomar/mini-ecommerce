import type { LoginInputs, SignupInputs } from "./types";

export async function signup(user: SignupInputs) {
  try {
    const res = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function login(user: LoginInputs) {
  try {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
