import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineProductionComponent } from './line-production.component';

describe('LineProductionComponent', () => {
  let component: LineProductionComponent;
  let fixture: ComponentFixture<LineProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineProductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
