import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiHomeComponent } from './ui-home/ui-home.component';
import { UiReadableComponent } from './ui-readable/ui-readable.component';
import { UiTrashComponent } from './ui-trash/ui-trash.component';
import { UiSnedComponent } from './ui-sned/ui-sned.component';
import { UiSpamComponent } from './ui-spam/ui-spam.component';


  const route: Routes = [
    {
      path: "",
      component: UiHomeComponent
    },
    {
      path: "read/messsage",
      component: UiReadableComponent
    },
    {
      path: "spam/messages",
      component: UiSpamComponent
    },
    {
      path: "trash",
      component: UiTrashComponent
    },
    {
      path: "sended/messages",
      component: UiSnedComponent
    }
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UserInboxModule { }
