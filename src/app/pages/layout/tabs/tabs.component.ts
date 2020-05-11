import {CommonPatientDetailService} from '../../../@core/mock/common-patients-detail-service';
import { Component, OnInit } from '@angular/core';
import {PatientDetailsService} from '../../../@core/mock/PatientDetails.service';
import { PatientDetail } from '../../../@core/data/PatientDetails';
import { HttpParams} from '@angular/common/http';


@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {
  passparameterservice:CommonPatientDetailService;
  PatientDetailSummary: PatientDetail;
  Params: HttpParams;
  PatientName: string;
  loading = false;
  ngOnInit(): void {
    this.loading = true;
  }
  constructor(private PatientService: PatientDetailsService, private commonservice: CommonPatientDetailService) {
    this.passparameterservice = commonservice;
    this.PatientDetailSummary = new PatientDetail;
    let PatientVisitID= this.passparameterservice.getSession('PatientVisitID');
    this.Params = new HttpParams();
    if (PatientVisitID != '') {
      this.Params = this.Params.set("PatientVisitID", PatientVisitID);
    }
    this.PatientService.getPatientDetailbyVisitID("12").subscribe((data: any) => {
      this.PatientDetailSummary = data;
      console.log(this.PatientDetailSummary)
      this.loading =false;
    });
    
  }

}
