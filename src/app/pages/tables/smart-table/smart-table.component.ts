import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {SmartTableService} from '../../../@core/mock/smart-table.service'
import { Router } from '@angular/router';
import {CommonPatientDetailService} from '../../../@core/mock/common-patients-detail-service';
import { HttpParams} from '@angular/common/http';
import {EventProxyService} from '../../../@core/mock/eventProxy.service';
import {ClientFacilityService} from '../../../@core/mock/client-facility.service';
import { ClientFacility } from '../../../@core/data/client-facility';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {NotificationsService} from '@stanvanheumen/ngx-notifications';




@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  products:any = [];
  passparameterservice:CommonPatientDetailService;
  groupFilters: EventEmitter<any> = new EventEmitter<any>();
  Params: HttpParams;
  SearchService: SmartTableService;
  ngOnInit(): void {
    this.eventProxyService.getEventSubject().subscribe((param: any) => {
      if (param !== undefined && param !== '0') {
        debugger;
        this.currentFacility = "Select Facility"
        this.loadfacility(param);
      }
      else{
        debugger;
        this.Value = [];
      }
      });
      // debugger;
      // this.loadfacility('1');

  }
  settings = {
    actions:false,
    columns: {
      AccountNumber: {
        title: 'ACCOUNT',
        type: 'number',
      },
      PatientName: {
        title: 'PATIENT',
        type: 'string',
      },
      Registrar: {
        title: 'REGISTRAR',
        type: 'string',
      },
      FinancialClass: {
        title: 'CLASS',
        type: 'string',
      },
      MRN: {
        title: 'MRN',
        type: 'string',
      },
      DOS: {
        title: 'DOS',
        type: 'string',
      },
      Gender: {
        title: 'GENDER',
        type: 'string',
      },
    },
  };
  
  source: LocalDataSource = new LocalDataSource();
  currentFacility = 'Select Facility';
  Value: ClientFacility[];
  currentAlignment = 'bottom left';
  

  constructor(private router: Router, private service: SmartTableService, 
              private commonservice: CommonPatientDetailService,
              private eventProxyService: EventProxyService,
              private facilityService: ClientFacilityService,
              private notifications: NotificationsService) {
    this.products = [];
    this.passparameterservice = commonservice;
    this.SearchService = service;
    this.Params = new HttpParams();
  }

  onUserRowSelect(event): void {
    this.passparameterservice.setSession('PatientVisitID', event.data.PatientVisitID);
    this.router.navigate(["/pages/layout/tabs"]);
  }
  loadfacility(client: string){
    this.facilityService.getFacilityByClientId(client).subscribe((data: any) => {
      this.Value = data.map((elem: ClientFacility[]) => elem);
      debugger;
    });
  }
  changeFacility(FacilityId: string) {
    this.currentFacility = FacilityId;
    debugger;
  }

  onSubmit(AccountNumber: string, DateFrom: string, DateTo: string, PayerCode: string,
    FinancialClass: string, FirstName: string, LastName: string, Facility: string): void {
      debugger;
    if (AccountNumber != '') {
      this.Params = this.Params.set("AccountNumber", AccountNumber);
    }
    if (DateFrom !="") {
      this.Params = this.Params.set("DateFrom", DateFrom);
    }
    if (DateTo != "") {
      this.Params = this.Params.set("DateTo", DateTo);
    }
    if (PayerCode != '') {
      this.Params = this.Params.set("PayerCode", PayerCode);
    }
    if (FinancialClass != '') {
      this.Params = this.Params.set("FinancialClass", FinancialClass);
    }
    if (FirstName != '') {
      this.Params = this.Params.set("FirstName", FirstName);
    }
    if (LastName != '') {
      this.Params = this.Params.set("LastName", LastName);

    }
    let ClientName= this.passparameterservice.getSession('SelectedClient').replace(/^"(.*)"$/, '$1');
    if (ClientName != '' && ClientName != undefined && ClientName != 'Select Client'){
      this.Params = this.Params.set("ClientName", ClientName);
      if (this.currentFacility != '' && this.currentFacility != 'Select Facility'){
        this.Params = this.Params.set("FacilityCode", this.currentFacility);
        this.SearchService.getAllEmployee(this.Params).subscribe((data: {}) => {
          this.products = data;
          debugger;
          this.source.load(this.products);
          
          LastName = '';
          FirstName = '';
          FinancialClass = '';
          PayerCode = '';
          DateTo = '';
          DateFrom = '';
          AccountNumber = '';
        });
      }
      else{
        this.notifications.warn('Please select Fecility!');
      }
    }
    else{
      this.notifications.warn('Please select Client!');
    }
    }
}
