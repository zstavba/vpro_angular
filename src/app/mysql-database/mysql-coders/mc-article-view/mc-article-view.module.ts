import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { McavBasicsComponent } from './mcav-basics/mcav-basics.component';
import { McavGroupsComponent } from './mcav-groups/mcav-groups.component';
import { McavCountryComponent } from './mcav-country/mcav-country.component';
import { McavUsersComponent } from './mcav-users/mcav-users.component';

const routes: Routes = [
  {
    path: "",
    component: McavBasicsComponent
  },
  {
    path: "groups",
    component: McavGroupsComponent
  },
  {
    path: "country",
    component: McavCountryComponent
  },
  {
    path: "users",
    component: McavUsersComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class McArticleViewModule { }
