import { createContext, useContext, useReducer } from "react";
import { jobsReducer } from "../reducer/jobsReducer";
const jobsContext = createContext();
const useJobs = () => useContext(jobsContext);
const JobProvider = ({ children }) => {
  const [jobsState, jobsDispatch] = useReducer(jobsReducer, {
    jobs: [],
  });
  return (
    <jobsContext.Provider value={{ jobsState, jobsDispatch }}>
      {children}
    </jobsContext.Provider>
  );
};
export { useJobs, JobProvider };
