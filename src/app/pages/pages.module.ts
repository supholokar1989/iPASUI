import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {SearchPageModule} from './SearchPage/searchpage.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    SearchPageModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
