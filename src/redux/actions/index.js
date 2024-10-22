// export const navigateLogin = payload =>({
//     type: 'NAVIGATE_LOGIN',
//     payload
// })
// export const actionLogin = payload => ({
//     type: 'ACTION_LOGIN',
//     payload
// })
// export const loginSuccess = payload => ({
//     type: 'LOGIN_SUCCESS',
//     payload
// })
// export const loginFail = payload => ({
//     type: 'LOGIN_FAIL',
//     payload
// })
// export const loginWithGoogle = payload => ({
//     type: 'LOGIN_WITH_GOOGLE',
//     payload
// })
// export const loginWithFacebook = payload =>({
//     type: 'LOGIN_WITH_FACEBOOK',
//     payload
// })
// export const actionRegister = payload =>({
//     type: 'ACTION_REGISTER',
//     payload
// })
// export const registerSuccess = payload => ({
//     type: 'REGISTER_SUCCESS',
//     payload
// })
// export const registerFail = payload => ({
//     type: 'REGISTER_FAIL',
//     payload
// })
// export default {
//     navigateLogin,
//     actionLogin,
//     loginSuccess,
//     loginFail,
//     actionRegister,
//     registerSuccess,
//     registerFail
// }
export const _onSuccess = action => action + '_SUCCESS'
export const _onFail = action => action + '_FAIL'
export const _onUnMount = action => action + '_UNMOUNT'
export default {
    LOGIN : 'LOGIN',
    REGISTER : 'REGISTER',
    LOGOUT : 'LOGOUT'
}