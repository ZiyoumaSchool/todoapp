import { toast } from "react-toastify";

const authReducer = (state={}, action) => {

    switch(action.type){
        case "SIGN_IN": 
            toast("Welcome back ...");
            return state;
        case "SIGN_IN_ERR":
            toast.error("Sign In Error ...");
            return state;
        default:
            return state;
    }
};

export default authReducer;