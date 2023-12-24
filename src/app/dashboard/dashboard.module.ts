import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { UserComponent } from './user/user.component';

const route : Routes = [
  {
    path: "",
    component: DashboardHomeComponent
  },
  {
    path: "profile",
    component: UserComponent,
    loadChildren : () => import('./user/user.module').then(m => m.UserModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class DashboardModule { }
