import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Please Login !!!",
        email: null,
        password:null,
    }
})
export default UserContext;