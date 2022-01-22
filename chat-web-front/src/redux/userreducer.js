export const userReducer = {
  state: {
    id: null,
    username: null,
    token: null,
    loggedIn: false,
    user_destino: null,
  },

  reducers: {
    setUserId(state, id) {
      return Object.assign({}, { ...state, id: id });
    },
    setUserInfo(state, username) {
      return Object.assign({}, { ...state, username: username });
    },
    setLoggedIn(state, loggedIn) {
      return Object.assign({}, { ...state, loggedIn: loggedIn });
    },
    setLogOut(state) {
      return Object.assign(
        {},
        {
          ...state,
          id: null,
          username: null,
          token: null,
          loggedIn: false,
          user_destino: null,
        }
      );
    },
    setUserDestino(state, user_destino) {
      return Object.assign({}, { ...state, user_destino: user_destino });
    },
    setToken(state, token) {
      return Object.assign({}, { ...state, token: token });
    },
  },
  effects: {},
};
