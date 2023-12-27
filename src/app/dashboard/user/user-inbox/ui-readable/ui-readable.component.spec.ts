import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiReadableComponent } from './ui-readable.component';

describe('UiReadableComponent', () => {
  let component: UiReadableComponent;
  let fixture: ComponentFixture<UiReadableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiReadableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiReadableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
