import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfmHomeComponent } from './ufm-home.component';

describe('UfmHomeComponent', () => {
  let component: UfmHomeComponent;
  let fixture: ComponentFixture<UfmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfmHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UfmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
