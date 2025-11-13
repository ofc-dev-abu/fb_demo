// // src/context/AuthProvider.tsx
// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { api, setToken, clearToken, getToken, toMessage } from "../api/client";

// export type User = {
//   id: string;
//   name: string;
//   email: string;
//   demoCount: number;
// };

// type MePayload = { user: User };

// type AuthContextType = {
//   user: User | null;
//   token: string | null;
//   register: (name: string, email: string, password: string) => Promise<void>;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
//   /** Legacy alias; kept for compatibility */
//   refresh: () => Promise<MePayload | null>;
//   /** Canonical “who am I” – returns { user } with up-to-date demoCount */
//   refreshMe: () => Promise<MePayload | null>;
// };

// const AuthContext = createContext<AuthContextType>(null!);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setTk] = useState<string | null>(getToken());

//   /**
//    * On first mount: only hit /auth/me if we have a token BUT no user yet.
//    * This prevents the extra request immediately after a successful login/register
//    * (we already set user from that response).
//    */
//   useEffect(() => {
//     if (getToken() && !user) {
//       refreshMe().catch(() => {});
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const register = useCallback(
//     async (name: string, email: string, password: string) => {
//       try {
//         const res = await api.post("/auth/register", {
//           name,
//           email,
//           password,
//           // backend validates equality; we pass confirm here for convenience
//           confirmPassword: password,
//         });
//         const tk = res.data.token as string;
//         setToken(tk);
//         setTk(tk);
//         // server returns normalized user inc. demoCount
//         setUser(res.data.user as User);
//       } catch (err) {
//         throw new Error(toMessage(err));
//       }
//     },
//     []
//   );

//   const login = useCallback(async (email: string, password: string) => {
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       const tk = res.data.token as string;
//       setToken(tk);
//       setTk(tk);
//       // server returns normalized user inc. demoCount
//       setUser(res.data.user as User);
//       // DO NOT call /auth/me here to avoid double network hit.
//     } catch (err) {
//       throw new Error(toMessage(err));
//     }
//   }, []);

//   const logout = useCallback(() => {
//     clearToken();
//     setUser(null);
//     setTk(null);
//   }, []);

//   /**
//    * Canonical refresher: /auth/me — returns { user } including demoCount
//    * Used by Demo.tsx to recompute hitsLeft after /user-onboard.
//    */
//   const refreshMe = useCallback(async (): Promise<MePayload | null> => {
//     try {
//       if (!getToken()) return null;
//       const { data } = await api.get<MePayload>("/auth/me");
//       if (data?.user) {
//         setUser(data.user);
//         return data;
//       }
//       return null;
//     } catch {
//       // token invalid / expired etc.
//       logout();
//       return null;
//     }
//   }, [logout]);

//   // Keep a legacy alias so other pages using `refresh()` don’t break
//   const refresh = refreshMe;

//   return (
//     <AuthContext.Provider
//       value={{ user, token, register, login, logout, refresh, refreshMe }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);







//<------------------------------------------------------------------------------------------------------------------------------






//<--------------------------------------------------------------------------------------------------------------------------------------



// src/context/AuthProvider.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api, setToken, clearToken, getToken, toMessage } from "../api/client";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  demoAllocated: number;
  demoUsed: number;
  demoRemaining: number; // derived on server (allocated - used, floored at 0)
};

type MePayload = { user: User };

type AuthContextType = {
  user: User | null;
  token: string | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<MePayload | null>;
  refreshMe: () => Promise<MePayload | null>;
};

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setTk] = useState<string | null>(getToken());

  // Only hit /auth/me when we have a token but no in-memory user yet.
  useEffect(() => {
    if (getToken() && !user) {
      refreshMe().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        const res = await api.post("/auth/register", {
          name,
          email,
          password,
          confirmPassword: password,
        });
        const tk = res.data.token as string;
        setToken(tk);
        setTk(tk);
        setUser(res.data.user as User);
      } catch (err) {
        throw new Error(toMessage(err));
      }
    },
    []
  );

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const tk = res.data.token as string;
      setToken(tk);
      setTk(tk);
      setUser(res.data.user as User);
    } catch (err) {
      throw new Error(toMessage(err));
    }
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
    setTk(null);
  }, []);

  const refreshMe = useCallback(async (): Promise<MePayload | null> => {
    try {
      if (!getToken()) return null;
      const { data } = await api.get<MePayload>("/auth/me");
      if (data?.user) {
        setUser(data.user);
        return data;
      }
      return null;
    } catch {
      logout();
      return null;
    }
  }, [logout]);

  // legacy alias
  const refresh = refreshMe;

  return (
    <AuthContext.Provider
      value={{ user, token, register, login, logout, refresh, refreshMe }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
