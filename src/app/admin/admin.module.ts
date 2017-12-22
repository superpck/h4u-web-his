import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from "clarity-angular";
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CreditComponent } from './credit/credit.component';
import { RegisterService } from '../services/register.service';
import { AuthGuardService } from '../services/authguard.service';

import { ToThaiDatePipe } from '../to-thai-date.pipe';
import { TimestampToThaiDatePipe } from '../timestamp-to-thai-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ClarityModule
  ],
  providers: [RegisterService, AuthGuardService],
  declarations: [LayoutComponent, DashboardComponent, RegisterComponent, CreditComponent, ToThaiDatePipe, TimestampToThaiDatePipe]
})
export class AdminModule { }
