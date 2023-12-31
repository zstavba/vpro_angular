import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { McArticlesComponent } from './mc-articles/mc-articles.component';
import { McCommercialComponent } from './mc-commercial/mc-commercial.component';
import { McProductionComponent } from './mc-production/mc-production.component';
import { McBasicsComponent } from './mc-basics/mc-basics.component';
import { McUsersComponent } from './mc-users/mc-users.component';
import { McArticleViewComponent } from './mc-article-view/mc-article-view.component';

const routes: Routes = [
  {
    path: "",
    component: McArticlesComponent
  },
  {
    path: "article/:id",
    component: McArticleViewComponent,
    loadChildren: () => import('./mc-article-view/mc-article-view.module').then(m => m.McArticleViewModule)
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
