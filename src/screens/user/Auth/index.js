import router from '../../../navigation/router';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ChangePassword from './ChangePassword';
import AccountProfile from './AccountProfile';
import InfoUser from './InfoUser';
import ForgotPassword from './ForgotPassword';
export const auth = {
  [router.LOGIN_SCREEN]: LoginScreen,
  [router.REGISTER_SCREEN]: RegisterScreen,
  [router.CHANGE_PASSWORD]: ChangePassword,
  [router.FORGOT_PASSWORD]: ForgotPassword,
  [router.ACCOUNT_PROFILE_SCREEN]: AccountProfile,
  [router.INFO_USER]: InfoUser,
};
