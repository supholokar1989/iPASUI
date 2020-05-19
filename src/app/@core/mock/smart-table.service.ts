import { Injectable } from '@angular/core';  
import { HttpClient, HttpParams } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { SmartTableData } from '../data/smart-table';  
  
// After that we write all methods related to consume web in employee.service.ts  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class SmartTableService {  
  //url = 'http://mysqlfhirservice.azurewebsites.net/api/registrations'; 
  url = 'https://apigateway20200519034558.azurewebsites.net/' 
  constructor(private http: HttpClient) { }  
  getAllEmployee(parameters: HttpParams): Observable<SmartTableData[]> {  
    return this.http.get<SmartTableData[]>(this.url + 'patientsearch', {params: parameters});  
  }  
  getEmployeeById(employeeId: string): Observable<SmartTableData> {  
    return this.http.get<SmartTableData>(this.url + '/GetEmployeeDetailsById/' + employeeId);  
  }  
  createEmployee(employee: SmartTableData): Observable<SmartTableData> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<SmartTableData>(this.url + '/InsertEmployeeDetails/',  
    employee, httpOptions);  
  }  
  updateEmployee(employee: SmartTableData): Observable<SmartTableData> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<SmartTableData>(this.url + '/UpdateEmployeeDetails/',  
    employee, httpOptions);  
  }  
  deleteEmployeeById(employeeid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +employeeid,  
 httpOptions);  
  }  
}  