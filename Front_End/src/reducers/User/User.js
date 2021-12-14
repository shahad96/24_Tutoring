const initialState = {
    user:{}
   };
   
   const User = (state = initialState, { type, payload }) => {
     switch (type) {
       case "SET_USER":
         return {
            user: payload,
         };
       default:
         return state;
     }
   };
   
   export default User;
   
   export const setUser = (user) => {
     return {
       type: "SET_USER",
       payload: user,
     };
   };