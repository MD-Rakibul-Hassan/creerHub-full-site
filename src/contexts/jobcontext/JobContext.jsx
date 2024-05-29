import { createContext } from "react";
import useFetchData from "../../hooks/useFetchData";

export const JobContext = createContext(null);

const ContextProvider = ({ children }) => {
      const data = useFetchData("data/jobs.json");
    return (
        <JobContext.Provider value={{data}}>
            {children}
        </JobContext.Provider>
    )
}
export default ContextProvider;