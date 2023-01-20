import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './header/header.component';
import { StepsUserInformationComponent } from './steps-user-information/steps-user-information.component';
import { JobsInformationComponent } from './steps-user-information/jobs-information/jobs-information.component';
import { CountryInformationComponent } from './steps-user-information/country-information/country-information.component';
import { UserInformationComponent } from './steps-user-information/user-information/user-information.component';


@NgModule({
  declarations: [
    HeaderComponent,
    StepsUserInformationComponent,
    UserInformationComponent,
    JobsInformationComponent,
    CountryInformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
