export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("auth-token"));
    if (user && user.accessToken) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      return user.accessToken ;
    } else {
      return {};
    }
  }
  