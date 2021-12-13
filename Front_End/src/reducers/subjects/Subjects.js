const initialState = {
   subjects:[],
   gradeId:0,
   teacherSlectedSubjects:[]
  };
  
  const Subjects = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_SUBJECTS":
        return {
            subjects: payload,
            gradeId:state.gradeId,
            teacherSlectedSubjects:state.teacherSlectedSubjects
        };
      case "SET_GRADE_ID":
        return {
          subjects:state.subjects,
          gradeId: payload,
          teacherSlectedSubjects:state.teacherSlectedSubjects
        };
        case "SET_TEACHER_SUBJECTS":
        return {
          subjects:state.subjects,
          gradeId: state.gradeId,
          teacherSlectedSubjects:payload
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

  export const setGradeId = (id) => {
    return {
      type: "SET_GRADE_ID",
      payload: id,
    };
  };

  export const setTeacherSubjects = (subjects) => {
    return {
      type: "SET_TEACHER_SUBJECTS",
      payload: subjects,
    };
  };