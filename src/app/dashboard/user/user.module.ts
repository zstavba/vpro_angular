import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserInboxComponent } from './user-inbox/user-inbox.component';
import { UserWorkInfoComponent } from './user-work-info/user-work-info.component';
import { UserFileManagerComponent } from './user-file-manager/user-file-manager.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const route: Routes = [
  {
    path: "",
    component: UserHomeComponent
  },
  {
    path: "inbox",
    component: UserInboxComponent
  },
  {
    path: "work/info",
    component: UserWorkInfoComponent
  },
  {
    path: "files",
    component: UserFileManagerComponent
  },
  {
    path: "settings",
    component: UserSettingsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UserModule { }
