import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSpamComponent } from './ui-spam.component';

describe('UiSpamComponent', () => {
  let component: UiSpamComponent;
  let fixture: ComponentFixture<UiSpamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSpamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiSpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
