const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null,
      };

    case "UPDATE_USERNAME":
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
