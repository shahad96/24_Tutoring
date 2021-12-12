const initialState = {
   subjects:[]
  };
  
  const Subjects = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_SUBJECTS":
        return {
            subjects: payload,
        };
      default:
        return state;
    }
  };
  
  export default Subjects;
  
  export const setSubjects = (subjects) => {
    return {
      type: "SET_SUBJECTS",
      payload: subjects,
    };
  };