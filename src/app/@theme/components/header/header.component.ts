import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {CommonPatientDetailService} from '../../../@core/mock/common-patients-detail-service';
import {EventProxyService} from '../../../@core/mock/eventProxy.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  passparameterservice:CommonPatientDetailService;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];
  clients = [
    {
      value: '0',
      name: 'Select Client',
      id: '0',
    },
    {
      value: '1',
      name: 'Texas Baptist',
      id: '1',
    },
    {
      value: '2',
      name: 'Oklahoma Methodist',
      id: '2',
    },
  ];

  currentTheme = 'default';

  currentClient = '0';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  SelectedclientName:string;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private commonservice: CommonPatientDetailService,
              private eventProxyService: EventProxyService) {
                this.passparameterservice = commonservice;
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.passparameterservice.setSession('SelectedClient', 'Select Client');
    //  this.clients.forEach(function (value){
    //    debugger;
    //    this.passparameterservice = new this.commonservice;
    //   this.passparameterservice.setSession(value.value, value.name);
    //   debugger;
    // });

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  changeClient(clientValue: any) {
    debugger;
    for (var value in this.clients){
        if (this.clients[value].value == clientValue){
          debugger;
          this.SelectedclientName = this.clients[value].name;
        }
    };
    this.passparameterservice.removeItem('SelectedClient');
    console.log(clientValue);
    this.passparameterservice.setSession('SelectedClient', this.SelectedclientName);
    this.eventProxyService.triggerEvent(clientValue);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
