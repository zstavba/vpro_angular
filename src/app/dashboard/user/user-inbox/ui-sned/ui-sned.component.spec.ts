import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSnedComponent } from './ui-sned.component';

describe('UiSnedComponent', () => {
  let component: UiSnedComponent;
  let fixture: ComponentFixture<UiSnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSnedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiSnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
