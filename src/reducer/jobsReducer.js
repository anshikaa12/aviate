const jobsReducer = (state, action) => {
  switch (action.type) {
    case "ADDJOB":
      return {
        ...state,
        jobs:
          state.jobs.find((job) => job.id === action.payload.id) !== undefined
            ? [...state.jobs]
            : [...state.jobs, action.payload],
      };
    default:
      return state;
  }
};

export {jobsReducer}