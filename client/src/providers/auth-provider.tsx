import { AuthenticatedType } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// context type
type AuthContextType = {
  user: AuthenticatedType | null;
  updateUser: (data: AuthenticatedType | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  let initialUser = null;
  try {
    const storedUserData = localStorage.getItem("user_data");
    initialUser = storedUserData ? JSON.parse(storedUserData) : null;
  } catch (error) {
    console.error(
      "ERROR! Failed to parse user data from local storage.",
      error,
    );
  }

  const [currentUser, setCurrentUser] = useState<AuthenticatedType | null>(
    initialUser,
  );

  const updateUserHandler = (data: AuthenticatedType | null) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem("user_data", jsonData);
      setCurrentUser(data);
    } catch (error) {
      console.error(
        "ERROR! Failed to update user data in local storage.",
        error,
      );
    }
  };

  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem("user_data", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user_data");
    }
  }, [currentUser]);

  const contextValue: AuthContextType = {
    user: currentUser,
    updateUser: updateUserHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
// using useAppContext app context hook
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "ERROR! useAuthContext must be used within an AuthContextProvider",
    );
  }
  return context;
};
