import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowOrderSaveComponent } from './table-row-order-save.component';

describe('TableRowOrderSaveComponent', () => {
  let component: TableRowOrderSaveComponent;
  let fixture: ComponentFixture<TableRowOrderSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowOrderSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRowOrderSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
