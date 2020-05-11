import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {SmartTableService} from '../../../@core/mock/smart-table.service'
import { Router } from '@angular/router';
import {CommonPatientDetailService} from '../../../@core/mock/common-patients-detail-service';
import { HttpParams} from '@angular/common/http';




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

  // FirstName:string = "";
  // LastName:string="";
  // FinancialClass:string= "";
  // PayerCode:string ="";
  // AdmitTo:Date = new Date();
  // AdmitFrom:Date = new Date();
  // AccountNumber:string = "";
  ngOnInit(): void {

  }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
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
  

  constructor(private router: Router, private service: SmartTableService, private commonservice: CommonPatientDetailService) {
    this.products = [];
    this.passparameterservice = commonservice;
    this.SearchService = service;
    this.Params = new HttpParams();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event): void {
    this.passparameterservice.setSession('PatientVisitID', event.data.PatientVisitID);
    this.router.navigate(["/pages/layout/tabs"]);
  }

  onSubmit(AccountNumber: string, DateFrom: string, DateTo: string, PayerCode: string,
    FinancialClass: string, FirstName: string, LastName: string): void {
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
}
