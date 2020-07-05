const AUTH = false

const isAuth = (state = AUTH, {type, auth}) => {
  switch (type) {
    case 'AUTH': 
      return auth
    case 'LOGOUT': 
      return auth
    default:
      return state;
  }
}

export default isAuth;