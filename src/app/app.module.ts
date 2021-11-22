import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { TemplateComponent } from './template/template.component';
import { SampletempComponent } from './views/sampletemp/sampletemp.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { TeamsComponent } from './views/teams/teams.component';
import { DesignationComponent } from './views/designation/designation.component';
import { SupervisorsComponent } from './views/supervisors/supervisors.component';
import { QueriesComponent } from './views/queries/queries.component';
import { MyqueriesComponent } from './views/myqueries/myqueries.component';
import { QAqueriesComponent } from './views/qaqueries/qaqueries.component';
import { ReportsComponent } from './views/reports/reports.component';
import { RegisterComponent } from './views/register/register.component';
import { LogoutComponent } from './views/logout/logout.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    SampletempComponent,
    DashboardComponent,
    EmployeesComponent,
    TeamsComponent,
    DesignationComponent,
    SupervisorsComponent,
    QueriesComponent,
    MyqueriesComponent,
    QAqueriesComponent,
    ReportsComponent,
    RegisterComponent,
    LogoutComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
