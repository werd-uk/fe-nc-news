import { createContext, useState } from "react";

export const UserAccount = createContext();

export const UserAccountProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState("Not selected");
    const [userBase, setUserBase] = useState(null);

    return <UserAccount.Provider value={{ loggedInUser, setLoggedInUser, userBase, setUserBase }}>{children}</UserAccount.Provider>;
};
