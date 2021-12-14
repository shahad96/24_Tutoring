const initialState = {
   subjects:[],
   gradeId:0,
   teacherSlectedSubjects:[],
   cardColorIndex:0,
   cardColors:["#71B48F","#77C6DC","#E2B952","#DB7451"]
  };
  
  const Subjects = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_SUBJECTS":
        return {
            subjects: payload,
            gradeId:state.gradeId,
            teacherSlectedSubjects:state.teacherSlectedSubjects,
            cardColorIndex: state.cardColor,
            cardColors:state.cardColors
        };
      case "SET_GRADE_ID":
        return {
          subjects:state.subjects,
          gradeId: payload,
          teacherSlectedSubjects:state.teacherSlectedSubjects,
          cardColorIndex: state.cardColor,
          cardColors:state.cardColors
        };
        case "SET_TEACHER_SUBJECTS":
        return {
          subjects:state.subjects,
          gradeId: state.gradeId,
          teacherSlectedSubjects:payload,
          cardColorIndex: state.cardColor,
          cardColors:state.cardColors
        };
        case "CHANGE_CARD_COLOR":
              let color
          if (state.cardColor<4){
            color = state.cardColor+1
          }
          else{
            color = 1
          }
        return {
          subjects:state.subjects,
          gradeId: state.gradeId,
          teacherSlectedSubjects:state.teacherSlectedSubjects,
          cardColorIndex: color,
          cardColors:state.cardColors
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

  export const changeCardColor = () => {
    return {
      type: "CHANGE_CARD_COLOR",
    };
  };