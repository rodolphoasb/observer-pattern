import { Observer } from "../subjects/paymentSubject.js";

/* 
Marketing won't have any access to the database, it will just receive events and process them.
*/
export default class Marketing implements Observer {
  update({ id, userName }: { id: number; userName: string }) {
    console.log(`[${id}] Sending marketing email for ${userName}...`);
  }
}
