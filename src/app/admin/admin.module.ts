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
import { MophService } from '../services/moph.service';

import { ToThaiDatePipe } from '../to-thai-date.pipe';
import { TimestampToThaiDatePipe } from '../timestamp-to-thai-date.pipe';
import { PatientComponent } from './patient/patient.component';
import { PhrService } from '../services/phr.service';
import { AncComponent } from './patient/anc/anc.component';
import { DrugAllergyComponent } from './patient/drug-allergy/drug-allergy.component';
import { AllergyDetailComponent } from './patient/drug-allergy/allergy-detail/allergy-detail.component';
import { DrugOpdComponent } from './patient/drug-opd/drug-opd.component';
import { EpiComponent } from './patient/epi/epi.component';
import { LabfuComponent } from './patient/labfu/labfu.component';
import { NcdScreenComponent } from './patient/ncd-screen/ncd-screen.component';
import { PersonComponent } from './patient/person/person.component';
import { NcdDetailComponent } from './patient/ncd-screen/ncd-detail/ncd-detail.component';
import { LabDetailComponent } from './patient/labfu/lab-detail/lab-detail.component';
import { EpiDetailComponent } from './patient/epi/epi-detail/epi-detail.component';
import { DrugDetailComponent } from './patient/drug-opd/drug-detail/drug-detail.component';
import { MophComponent } from './moph/moph.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ClarityModule
  ],
  providers: [RegisterService, AuthGuardService, PhrService, MophService],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    RegisterComponent,
    CreditComponent,
    ToThaiDatePipe,
    TimestampToThaiDatePipe,
    PatientComponent,
    AncComponent,
    DrugAllergyComponent,
    AllergyDetailComponent,
    DrugOpdComponent,
    EpiComponent,
    LabfuComponent,
    NcdScreenComponent,
    PersonComponent,
    NcdDetailComponent,
    LabDetailComponent,
    EpiDetailComponent,
    DrugDetailComponent,
    MophComponent
  ]
})
export class AdminModule { }
