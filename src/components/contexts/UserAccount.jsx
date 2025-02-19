import { createContext, useState } from "react";

export const UserAccount = createContext();

export const UserAccountProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState("Not selected");

    return <UserAccount.Provider value={{ loggedInUser, setLoggedInUser }}>{children}</UserAccount.Provider>;
};
