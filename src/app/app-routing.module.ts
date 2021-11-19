import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { DesignationComponent } from './views/designation/designation.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { LogoutComponent } from './views/logout/logout.component';
import { MyqueriesComponent } from './views/myqueries/myqueries.component';
import { QAqueriesComponent } from './views/qaqueries/qaqueries.component';
import { QueriesComponent } from './views/queries/queries.component';
import { RegisterComponent } from './views/register/register.component';
import { ReportsComponent } from './views/reports/reports.component';
import { SupervisorsComponent } from './views/supervisors/supervisors.component';
import { TeamsComponent } from './views/teams/teams.component';

const tempChild : Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:"full"},
  {path:'dashboard', component: DashboardComponent},
  {path:'employees', component: EmployeesComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'teams', component:TeamsComponent},
  {path:'designation',component:DesignationComponent},
  {path:'supervisors',component:SupervisorsComponent},
  {path:'queries',component:QueriesComponent},
  {path:'myqueries',component:MyqueriesComponent},
  {path:'qaqueries',component:QAqueriesComponent},
  {path:'report',component: ReportsComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout', component:LogoutComponent}
]

const routes: Routes = [
  {path:"", redirectTo:'/template', pathMatch:"full"},
  {path:'template', component: TemplateComponent, children: tempChild},
  {path:'**', redirectTo:'/template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
