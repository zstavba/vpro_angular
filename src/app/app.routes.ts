import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MysqlDatabaseComponent } from './mysql-database/mysql-database.component';

export const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },

];
