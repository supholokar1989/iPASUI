import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbTreeGridModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbIconModule,
  NbListModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {NgxNotificationsModule} from '@stanvanheumen/ngx-notifications';
import {NgxTranslationsModule} from '@stanvanheumen/ngx-translations';



@NgModule({
  imports: [
    NbCardModule,
    FormsModule,
    NbActionsModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbListModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbUserModule,
    NbSelectModule,
    NbRadioModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    ngFormsModule,
    NgxNotificationsModule.forRoot(),
    NgxTranslationsModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],
})
export class TablesModule { }
