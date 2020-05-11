import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { userdata } from '../data/users.data';
   

@Injectable()
export class UserDataService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  private Usersdetails: userdata[]  = [
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20' },
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20'},
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20'},
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20'},
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20'},
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20'},
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20'},
    { FirstName: 'Sara', LastName: 'Barnett', level: 'Begginer', jobTitle: 'UI Designer', age:'20'},
  ];

  fetchUsers(): Observable<any> {
    return of(this.Usersdetails);
  }

  
}