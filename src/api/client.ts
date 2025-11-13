// // src/api/client.ts  (UNCHANGED)
// import axios from "axios";

// export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

// export function getToken() { return localStorage.getItem("auth_token") || ""; }
// export function setToken(token: string) { localStorage.setItem("auth_token", token); }
// export function clearToken() { localStorage.removeItem("auth_token"); }

// export type APIErrorPayload = {
//   message?: string;
//   code?: string;
//   errors?: Array<{ msg: string; param?: string; location?: string }>;
// };

// export const api = axios.create({ baseURL: API_BASE_URL, timeout: 15000 });

// api.interceptors.request.use((config) => {
//   const token = getToken();
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if ((err as any)?.response?.status === 401) {
//       clearToken();
//     }
//     return Promise.reject(err);
//   }
// );

// export function toMessage(err: unknown, fallback = "Something went wrong") {
//   if (axios.isAxiosError(err)) {
//     const data = (err as any).response?.data as APIErrorPayload | undefined;
//     if (data?.message) return data.message;
//     if (data?.errors?.[0]?.msg) return data.errors[0].msg;
//     return err.message || fallback;
//   }
//   return fallback;
// }




//<----------------------------------------------------


// src/api/client.ts
// import axios from "axios";

// export const API_BASE_URL = "http://localhost:4000/api"; // ← backend base URL

// export function getToken() {
//   return localStorage.getItem("auth_token") || "";
// }
// export function setToken(token: string) {
//   localStorage.setItem("auth_token", token);
// }
// export function clearToken() {
//   localStorage.removeItem("auth_token");
// }

// export const api = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 15000,
// });

// api.interceptors.request.use((config) => {
//   const token = getToken();
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err?.response?.status === 401) clearToken();
//     return Promise.reject(err);
//   }
// );

// export function toMessage(err: any, fallback = "Something went wrong") {
//   if (axios.isAxiosError(err)) {
//     return err.response?.data?.message || err.message || fallback;
//   }
//   return fallback;
// }







//<admin added----------------------------------------------------------------------------------------------------


// src/api/client.ts
import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

export function getToken() {
  return localStorage.getItem("auth_token") || "";
}
export function setToken(token: string) {
  localStorage.setItem("auth_token", token);
}
export function clearToken() {
  localStorage.removeItem("auth_token");
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) clearToken();
    return Promise.reject(err);
  }
);

export function toMessage(err: any, fallback = "Something went wrong") {
  if (axios.isAxiosError(err)) {
    return (
      err.response?.data?.message ||
      err.response?.data?.error ||
      err.message ||
      fallback
    );
  }
  return fallback;
}
