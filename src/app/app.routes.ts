import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MysqlDatabaseComponent } from './mysql-database/mysql-database.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:"",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },

];
