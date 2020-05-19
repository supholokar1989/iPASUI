import { Injectable } from '@angular/core';  
import { HttpClient, HttpParams } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { PatientDetail } from '../data/PatientDetails'; 
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 

@Injectable({  
    providedIn: 'root'  
  })  
    
//   export class PatientDetailsService { 
//     url = 'http://localhost:80/api/registrations/' 

//     constructor(private http: HttpClient) { }  
//     getPatientDetailbyVisitID(id): Observable<PatientDetail[]> {  
//         debugger;
//       return this.http.get<PatientDetail[]>(this.url + 'GetPatientsDetailByID/' + id); 
//   }
// }
export class PatientDetailsService {
  url = 'https://apigateway20200519034558.azurewebsites.net/' 
  constructor(private httpClient: HttpClient) {}
  getPatientDetailbyVisitID(id) {
    return this.httpClient.get(this.url + 'registrations/GetPatientsDetailByID/' + id).
        pipe(
           map((data: PatientDetail[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
}