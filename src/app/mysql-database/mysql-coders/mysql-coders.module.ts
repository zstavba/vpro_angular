import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { McArticlesComponent } from './mc-articles/mc-articles.component';
import { McCommercialComponent } from './mc-commercial/mc-commercial.component';
import { McProductionComponent } from './mc-production/mc-production.component';
import { McBasicsComponent } from './mc-basics/mc-basics.component';
import { McUsersComponent } from './mc-users/mc-users.component';

const routes: Routes = [
  {
    path: "",
    component: McArticlesComponent
  },
  {
    path: "commercial",
    component: McCommercialComponent
  },
  {
    path: "production",
    component: McProductionComponent
  },
  {
    path: "basics",
    component: McBasicsComponent
  },
  {
    path: "users",
    component: McUsersComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MysqlCodersModule { }
