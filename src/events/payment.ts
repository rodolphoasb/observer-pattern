import PaymentSubject from "../subjects/paymentSubject.js";

export default class Payment {
  paymentSubject: PaymentSubject;

  constructor(paymentSubject: PaymentSubject) {
    this.paymentSubject = paymentSubject;
  }

  creditCard({ id, userName, description }) {
    console.log(`Processing credit card payment from ${userName}...`);
    this.paymentSubject.notify({ id, userName, description });
  }
}
