import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserAvatarComponent } from './dashboard/components/user-avatar/user-avatar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WarehouseService } from './Services/warehouse.service';
import { InboxService } from './Services/inbox.service';
import { UserService } from './Services/user.service';
import { MeasurementsService } from './Services/measurements.service';
import { WorkOrderService } from './Services/work-order.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserAvatarComponent, HttpClientModule],
  providers: [
    WarehouseService,
    InboxService,
    UserService,
    MeasurementsService,
    WorkOrderService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vpro';
}