import AllOrders from './AllOrder';
import WaitConfirmOrder from './WaitConfirmOrder';
import WaitGetOrder from './WaitGetOrder';
import ProcessingOrder from './ProcessingOrder';
import CompleteOrder from './CompleteOrder';
import CancelOrder from './CancelOrder';
import EvaluateOrder from './EvaluateOrder';
import router from '@router';

export const top = {
  [router.ALL_ORDER]: AllOrders,
  [router.WAIT_CONFIRM_ORDER]: WaitConfirmOrder,
  [router.WAIT_GET_ORDER]: WaitGetOrder,
  [router.PROCESSING_ORDER]: ProcessingOrder,
  [router.COMPLETE_ORDER]: CompleteOrder,
  [router.CANCEL_ORDER]: CancelOrder,
  [router.EVALUATE_ORDER]: EvaluateOrder,
};
