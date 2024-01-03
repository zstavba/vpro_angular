import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'system-pagination',
  standalone: true,
  imports: [
    NgxPaginationModule
  ],
  templateUrl: './system-pagination.component.html',
  styleUrl: './system-pagination.component.scss'
})
export class SystemPaginationComponent {
  @Input() id?: string;
  @Input() maxSize ?: number;
  @Input() data ?: Array<any>;


  @Output() pageChange : EventEmitter<number> =  new EventEmitter();
  @Output() pageBoundsCorrection : EventEmitter<number> = new EventEmitter();
}
