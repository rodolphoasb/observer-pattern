import Payment from "./events/payment.js";
import Marketing from "./observers/marketing.js";
import Shipment from "./observers/shipment.js";
import PaymentSubject from "./subjects/paymentSubject.js";

const paymentSubject = new PaymentSubject();

const marketing = new Marketing();
const shipment = new Shipment();

/* 
The areas should subscribe to the payment subject to receive events. 
It's the subject's responsibility to notify the observers.
*/

paymentSubject.subscribe(marketing);
paymentSubject.subscribe(shipment);

const payment = new Payment(paymentSubject);
payment.creditCard({
  id: 1,
  description: "Macbook Pro 16",
  userName: "John Doe",
});

paymentSubject.unsubscribe(marketing);

payment.creditCard({
  id: 2,
  description: "Macbook Pro 13",
  userName: "John Doe 2",
});
