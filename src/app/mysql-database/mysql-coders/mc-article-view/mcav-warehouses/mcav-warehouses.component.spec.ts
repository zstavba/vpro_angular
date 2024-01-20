import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavWarehousesComponent } from './mcav-warehouses.component';

describe('McavWarehousesComponent', () => {
  let component: McavWarehousesComponent;
  let fixture: ComponentFixture<McavWarehousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavWarehousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
