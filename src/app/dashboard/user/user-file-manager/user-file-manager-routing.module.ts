import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UfmFoldersComponent } from './ufm-folders/ufm-folders.component';
import { UfmHomeComponent } from './ufm-home/ufm-home.component';

const routes: Routes = [
  {
    path: "",
    component: UfmHomeComponent
  },
  {
    path : "folders/:title",
    component: UfmFoldersComponent
  },

]


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserFileManagerRoutingModule { }
