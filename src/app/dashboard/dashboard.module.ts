import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { UserComponent } from './user/user.component';
import { MysqlDatabaseComponent } from '../mysql-database/mysql-database.component';

const route : Routes = [
  {
    path: "",
    component: DashboardHomeComponent
  },
  {
    path: "profile",
    component: UserComponent,
    loadChildren : () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: "mysql",
    component: MysqlDatabaseComponent,
    loadChildren: () => import('../mysql-database/mysql-database.module').then(m => m.MysqlDatabaseModule)
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
