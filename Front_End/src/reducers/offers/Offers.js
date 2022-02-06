
const offers = JSON.parse(localStorage.getItem("offers"));
const initialState = {
   offers: offers?offers:[]
  };
  
  const Offers = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_OFFERS":
      localStorage.setItem("offers",JSON.stringify(payload));
        return {
            offers: payload
        };
      default:
        return state;
    }
  };
  
  export default Offers;
  
  export const setOffers = (offers) => {
      console.log(offers);
    return {
      type: "SET_OFFERS",
      payload: offers,
    };
  };
