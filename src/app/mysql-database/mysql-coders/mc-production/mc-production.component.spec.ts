import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McProductionComponent } from './mc-production.component';

describe('McProductionComponent', () => {
  let component: McProductionComponent;
  let fixture: ComponentFixture<McProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McProductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
