
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { toast } from "@/components/ui/use-toast";

// Define types for our authentication system
interface User {
    id: string;
    username: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

type AuthAction =
    | { type: "SIGN_IN_SUCCESS"; payload: User }
    | { type: "SIGN_UP_SUCCESS"; payload: User }
    | { type: "SIGN_OUT" }
    | { type: "SET_LOADING"; payload: boolean };

interface AuthContextType {
    state: AuthState;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (username: string, email: string, password: string) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Initial state
const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
};

// Auth reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "SIGN_IN_SUCCESS":
        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case "SIGN_OUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        // Check if user is already logged in via localStorage
        const loadUser = () => {
            try {
                const userData = localStorage.getItem("user");
                if (userData) {
                    const user = JSON.parse(userData);
                    dispatch({ type: "SIGN_IN_SUCCESS", payload: user });
                } else {
                    dispatch({ type: "SET_LOADING", payload: false });
                }
            } catch (error) {
                console.error("Failed to load user from localStorage:", error);
                dispatch({ type: "SET_LOADING", payload: false });
            }
        };

        loadUser();
    }, []);

    // Sign in function
    const signIn = async (email: string, password: string) => {
        try {
            // This is a mock authentication
            // In a real app, you would call an API
            
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Check if user exists in localStorage
            const usersJSON = localStorage.getItem("users") || "[]";
            const users = JSON.parse(usersJSON);
            
            const user = users.find(
                (u: any) => u.email === email && u.password === password
            );
            
            if (!user) {
                throw new Error("Invalid email or password");
            }
            
            // Create user object without password
            const authenticatedUser = {
                id: user.id,
                username: user.username,
                email: user.email,
            };
            
            // Save to localStorage
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            
            // Update state
            dispatch({ type: "SIGN_IN_SUCCESS", payload: authenticatedUser });
            
            toast({
                title: "Signed in successfully",
                description: `Welcome back, ${user.username}!`,
            });
        } catch (error) {
            toast({
                title: "Sign in failed",
                description: error instanceof Error ? error.message : "An unknown error occurred",
                variant: "destructive",
            });
            throw error;
        }
    };

    // Sign up function
    const signUp = async (username: string, email: string, password: string) => {
        try {
            // This is a mock authentication
            // In a real app, you would call an API
            
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Check if user already exists
            const usersJSON = localStorage.getItem("users") || "[]";
            const users = JSON.parse(usersJSON);
            
            const existingUser = users.find((u: any) => u.email === email);
            if (existingUser) {
                throw new Error("User with this email already exists");
            }
            
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                username,
                email,
                password, // In a real app, never store plain text passwords
            };
            
            // Add to users array
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            
            // Create user object without password
            const authenticatedUser = {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            };
            
            // Save to localStorage
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            
            // Update state
            dispatch({ type: "SIGN_UP_SUCCESS", payload: authenticatedUser });
            
            toast({
                title: "Signed up successfully",
                description: `Welcome, ${username}!`,
            });
        } catch (error) {
            toast({
                title: "Sign up failed",
                description: error instanceof Error ? error.message : "An unknown error occurred",
                variant: "destructive",
            });
            throw error;
        }
    };

    // Sign out function
    const signOut = () => {
        localStorage.removeItem("user");
        dispatch({ type: "SIGN_OUT" });
        toast({
            title: "Signed out successfully",
            description: "You have been signed out.",
        });
    };

    return (
        <AuthContext.Provider
            value={{
                state,
                signIn,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
