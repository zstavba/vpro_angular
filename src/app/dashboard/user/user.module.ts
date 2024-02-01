import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserInboxComponent } from './user-inbox/user-inbox.component';
import { UserWorkInfoComponent } from './user-work-info/user-work-info.component';
import { UserFileManagerComponent } from './user-file-manager/user-file-manager.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  {
    path: "",
    component: UserHomeComponent
  },
  {
    path: "inbox",
    component: UserInboxComponent,
    loadChildren: () => import('./user-inbox/user-inbox.module').then(m => m.UserInboxModule)
  },
  {
    path: "work/info",
    component: UserWorkInfoComponent
  },
  {
    path: "files",
    component: UserFileManagerComponent,
    loadChildren : () => import('./user-file-manager/user-file-manager-routing.module').then(m => m.UserFileManagerRoutingModule)
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
    RouterModule.forChild(route),
    HttpClientModule
  ]
})
export class UserModule { }
