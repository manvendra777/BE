import Cookies from 'js-cookie'
const Auth = {
    getAuth() {

        if (typeof Cookies.get('isLoggedIn') == 'undefined') {
            return false;
        } else {
            return true
        }
    }
}
export default Auth;