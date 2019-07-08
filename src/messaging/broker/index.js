import { Subject } from 'rxjs';

const eventBrokerSubject = new Subject();

export default (() => {

    console.log('starting the broker');

    let observers = {}

    return {
        sub: (listener) => {
            //subscribe to the subject
            eventBrokerSubject.subscribe(s => listener(s));
        },
        pub: (action) => {
            //yield
            eventBrokerSubject.next(action);
        },
        stream: () => {
            return eventBrokerSubject.asObservable();
        }
    }

})()