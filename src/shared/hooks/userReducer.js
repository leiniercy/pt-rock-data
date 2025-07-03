export const userReducerTypes = {
  setUser: '[USER] - SET USER',
  unsetUser: '[USER] - UNSET USER',
  loadUserInfo: '[USER] - LOAD USER'
}

export function userReducer (state, action) {
  switch (action.type) {
    case userReducerTypes.setUser: {
      const { ...user } = action.payload
      return { ...state, user }
    }
    case userReducerTypes.unsetUser:
      return {
        ...state,
        user: null
      }

    case userReducerTypes.loadUserInfo:
      return action.payload
    default:
      return state
  }
}
