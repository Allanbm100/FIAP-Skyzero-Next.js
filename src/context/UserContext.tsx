"use client"

import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
    idUsuario: number | null;
    setIdUsuario: (id: number | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [idUsuario, setIdUsuario] = useState<number | null>(null);

    return (
        <UserContext.Provider value={{ idUsuario, setIdUsuario }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserContextProvider");
    }
    return context;
};

