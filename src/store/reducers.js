const initialState = {
  currentUser: null,
  users: [],
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_IS_AUTH":
      return {
        ...state,
        isAuth: payload,
      };
    case "USER:FETCH_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "USER:SET_USERS":
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
