/* 
 The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes. 
*/
export default class PaymentSubject {
  /* 
   The # symbol means that observers is a private field, only accessible within the class. It's initialized as a new Set, which is a built-in JavaScript object that lets you store unique values.
  */
  #observers: Set<Observer> = new Set();

  notify(data: Payload) {
    this.#observers.forEach((observer) => observer.update(data));
  }

  unsubscribe(observer: Observer) {
    this.#observers.delete(observer);
  }

  subscribe(observer: Observer) {
    this.#observers.add(observer);
  }
}

interface Payload {
  id: number;
  description: string;
  userName: string;
}

export interface Observer {
  update({ id, userName }: Omit<Payload, "description">): void;
}
