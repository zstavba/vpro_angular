import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPaginationComponent } from './system-pagination.component';

describe('SystemPaginationComponent', () => {
  let component: SystemPaginationComponent;
  let fixture: ComponentFixture<SystemPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
