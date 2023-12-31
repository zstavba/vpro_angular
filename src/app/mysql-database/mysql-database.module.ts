import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MysqlCodersComponent } from './mysql-coders/mysql-coders.component';

const routes: Routes = [
  {
    path: "coders",
    component: MysqlCodersComponent,
    loadChildren: () => import('./mysql-coders/mysql-coders.module').then(m => m.MysqlCodersModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MysqlDatabaseModule { }
