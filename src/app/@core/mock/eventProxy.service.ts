import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventProxyService {

 private eventSubject = new BehaviorSubject<any>(undefined);

 triggerEvent(param: any) {
     this.eventSubject.next(param);
 }

 getEventSubject(): BehaviorSubject<any> {
    return this.eventSubject;
 }
}