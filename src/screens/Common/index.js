import router from '@router';
import AboutCompany from './AboutCompany';
import Address from './Address';
import Catalogue from './Catalogue';
import Help from './CenterHelp';
import ChangePassword from './ChangePassword';
import Contract from './Contract';
import Debt from './Debt';
import OrderDetails from './DetailOrder';
import ForgotPassword from './ForgotPassword';
import InfoUser from './InfoUser';
import News from './New';
import Pay from './Pay';
import CumulativePoints from './PointAndVoucher';
import ProductDetail from './ProductDetail';
import ProductsFavorite from './ProductFavorite';
import ProductsSave from './ProductSave';
import ProductsSeen from './ProductSeen';
import Recruitment from './Recruitment';
import Setting from './Setting';
import Videos from './Video';
import Cart from './Cart';
import VoucherRedeemed from './PointAndVoucher/VoucherExchanged';
import DetailVoucher from './PointAndVoucher/DetailVoucher';
import HelpWithEmail from './CenterHelp/HelpWithEmail';
export const common = {
  [router.ABOUT_COMPANY]: AboutCompany,
  [router.ADDRESS]: Address,
  [router.CATALOGUE]: Catalogue,
  [router.HELP]: Help,
  [router.HELPWITHEMAIL]: HelpWithEmail,
  [router.CHANGE_PASSWORD]: ChangePassword,
  [router.CONTRACT]: Contract,
  [router.DEBT]: Debt,
  [router.ORDER_DETAIL]: OrderDetails,
  [router.FORGOT_PASSWORD]: ForgotPassword,
  [router.INFO_USER]: InfoUser,
  [router.NEW]: News,
  [router.PAY]: Pay,
  [router.CUMULATIVE_POINT]: CumulativePoints,
  [router.VOUCHER_EXCHANGE]: VoucherRedeemed,
  [router.DETAIL_VOUCHER]: DetailVoucher,
  [router.PRODUCT_DETAIL]: ProductDetail,
  [router.PRODUCT_FAVORITE]: ProductsFavorite,
  [router.PRODUCT_SAVE]: ProductsSave,
  [router.PRODUCT_SEEN]: ProductsSeen,
  [router.RECRUITMENT]: Recruitment,
  [router.SETTING]: Setting,
  [router.VIDEO]: Videos,
  [router.CART]: Cart,
};
