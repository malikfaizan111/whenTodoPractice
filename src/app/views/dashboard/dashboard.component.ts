import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  temployees()
  {
    this.router.navigate(['/template/employees']);
  }
  tdepartment(){
    this.router.navigate(['/template/departments']);
  }
  tteam(){
    this.router.navigate(['/template/teams']);
  }
  tdesignation(){
    this.router.navigate(['/template/designation']);
  }
  tqueries(){
    this.router.navigate(['/template/queries']);
  }
  // tpqueries(){
  //   this.router.navigate(['/template/departments']);
  // }
  // dqueries(){
  //   this.router.navigate(['/template/departments']);
  // }
}
