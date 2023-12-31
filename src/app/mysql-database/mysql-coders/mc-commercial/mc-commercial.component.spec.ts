import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McCommercialComponent } from './mc-commercial.component';

describe('McCommercialComponent', () => {
  let component: McCommercialComponent;
  let fixture: ComponentFixture<McCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McCommercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
