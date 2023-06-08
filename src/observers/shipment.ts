import { Observer } from "../subjects/paymentSubject.js";

/* 
Shipment won't have any access to the database, it will just receive events and process them.
*/
export default class Shipment implements Observer {
  update({ id, userName }: { id: number; userName: string }) {
    console.log(`[${id}] will pack the user's order to ${userName}...`);
  }
}
