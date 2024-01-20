import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { McavBasicsComponent } from './mcav-basics/mcav-basics.component';
import { McavGroupsComponent } from './mcav-groups/mcav-groups.component';
import { McavCodesComponent } from './mcav-codes/mcav-codes.component';
import { McavShoppingComponent } from './mcav-shopping/mcav-shopping.component';
import { McavWarehousesComponent } from './mcav-warehouses/mcav-warehouses.component';
import { McavDescriptionComponent } from './mcav-description/mcav-description.component';

const routes: Routes = [
  {
    path: "",
    component: McavBasicsComponent
  },
  {
    path: "codes",
    component: McavCodesComponent
  },
  {
    path: "description",
    component: McavDescriptionComponent
  },
  {
    path: "shopping",
    component: McavShoppingComponent
  },
  {
    path: "exchanges",
    component: McavGroupsComponent
  },
  {
    path: "warehouses",
    component: McavWarehousesComponent
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
