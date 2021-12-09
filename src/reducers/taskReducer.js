import { toast } from "react-toastify";

const taskReducer = (state = {}, action)=>{
    switch(action.type){
        case "ADD_TASK" : {
            toast.success("Added a task")
            console.log("Added a task")
            return state;
        }
        case "ADD_TASK_ERR" : {
            toast.error("An Error occurred")
            console.log("An Error occurred")
            return state;
        }
        case "REMOVE_TASK" : {
            toast.warn("A task was removed...");
            console.log("A task was removed...")
            return state;
        }
        case "REMOVE_TASK_ERR" : {
            toast.error("A task remove Error occurred")
            console.log("A task remove Error occurred")
            return state;
        }

        case "TOGGLE_CHECKED" : {
            toast.warn("A task status changed...");
            console.log("A task status changed...")
            return state;
        }
        case "TOGGLE_CHECKED_ERR" : {
            toast.error("A task status changed Error occurred")
            console.log("A task status changed Error occurred")
            return state;
        }


        default: return state;
    }
};

export default taskReducer;